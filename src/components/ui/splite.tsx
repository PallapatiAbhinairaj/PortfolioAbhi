'use client'

import { Suspense, lazy, useEffect, useRef, useCallback } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<Application | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!splineRef.current) return
    
    // Get container bounds for accurate positioning
    const container = containerRef.current
    if (!container) return
    
    const rect = container.getBoundingClientRect()
    
    // Calculate mouse position relative to container center
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Normalize to -1 to 1 range based on distance from center
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    
    // Clamp values
    const clampedX = Math.max(-1, Math.min(1, x))
    const clampedY = Math.max(-1, Math.min(1, y))
    
    try {
      // Try to set variables if they exist in the Spline scene
      splineRef.current.setVariable?.('mouseX', clampedX)
      splineRef.current.setVariable?.('mouseY', clampedY)
      
      // Direct object manipulation for head/eyes
      const lookAtX = clampedX * 25 // Degrees of rotation
      const lookAtY = clampedY * -20
      
      // Common object names for robot head/eyes in Spline scenes
      const targetNames = [
        'Head', 'head', 'Robot Head', 'robot head',
        'Eyes', 'eyes', 'Eye', 'eye', 
        'Look Target', 'LookAt', 'look_target',
        'Neck', 'neck', 'Face', 'face',
        'Robot', 'robot', 'Character', 'character'
      ]
      
      targetNames.forEach(name => {
        const obj = splineRef.current?.findObjectByName(name)
        if (obj) {
          // Apply smooth rotation
          obj.rotation.y = lookAtX * (Math.PI / 180)
          obj.rotation.x = lookAtY * (Math.PI / 180)
        }
      })
    } catch (err) {
      // Silently fail if objects not found
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  const handleLoad = (splineApp: Application) => {
    splineRef.current = splineApp
    
    // Log all available object names for debugging
    console.log('Spline scene loaded')
    
    // Try to find all objects in the scene
    try {
      const allObjects = splineApp.getAllObjects?.()
      if (allObjects) {
        console.log('Available Spline objects:', allObjects.map((obj: any) => obj.name))
      }
    } catch (err) {
      // Some scenes don't support getAllObjects
    }
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
          onLoad={handleLoad}
        />
      </Suspense>
    </div>
  )
}
