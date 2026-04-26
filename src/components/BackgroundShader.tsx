import React, { useEffect, useRef } from 'react';

/**
 * Premium Hero Background Shader
 * 
 * Performance choices:
 * 1. Vanilla WebGL for zero overhead and direct GPU control.
 * 2. Optimized Sin/Cos waves with smoothstep for noise simulation without expensive texture lookups or complex Perlin loops.
 * 3. Low-resolution internal rendering (optional, but here prioritized quality with efficient math).
 * 4. RAF-based loop for frame-rate consistency.
 */

const VERTEX_SHADER = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform bool u_isDark;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float ratio = u_resolution.x / u_resolution.y;
    vec2 p = uv;
    p.x *= ratio;

    vec3 color1, color2, color3;
    
    if (u_isDark) {
      color1 = vec3(0.0, 0.023, 0.145); // #000625
      color2 = vec3(0.117, 0.227, 0.541); // #1e3a8a
      color3 = vec3(0.043, 0.102, 0.168);
    } else {
      color1 = vec3(1.0, 1.0, 1.0); // white
      color2 = vec3(0.941, 0.961, 1.0); // very light blue
      color3 = vec3(0.882, 0.914, 1.0); // slightly more blue
    }

    float t = u_time * 0.1;

    float w1 = sin(p.x * 2.0 + t) * 0.5 + 0.5;
    float w2 = sin(p.y * 3.0 - t * 1.2) * 0.5 + 0.5;
    float w3 = sin((p.x + p.y) * 1.5 + t * 0.8) * 0.5 + 0.5;

    float mixed = smoothstep(0.2, 0.8, (w1 + w2 + w3) / 3.0);
    
    vec3 color = mix(color1, color2, mixed * (u_isDark ? 0.4 : 0.6));
    color = mix(color, color3, w2 * (u_isDark ? 0.3 : 0.2));

    // Remove heavy vignette for Light mode to avoid "boxed" look
    if (u_isDark) {
      float dist = distance(uv, vec2(0.5));
      color *= 1.0 - smoothstep(0.5, 1.5, dist);
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

export const HeroBackground: React.FC<{ isDarkMode?: boolean }> = ({ isDarkMode = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram();
    if (!program) return;

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);

    if (!vs || !fs) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const darkLoc = gl.getUniformLocation(program, 'u_isDark');

    let animationId: number;
    const render = (time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }

      gl.uniform1f(timeLoc, time * 0.001);
      gl.uniform2f(resLoc, width, height);
      gl.uniform1i(darkLoc, isDarkMode ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-screen h-screen pointer-events-none"
      style={{ filter: isDarkMode ? 'brightness(0.8) contrast(1.1)' : 'none' }}
    />
  );
};
