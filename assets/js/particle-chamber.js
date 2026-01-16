// Enhanced Particle Cloud Chamber Effect with Vapor Trails
// Simulates charged particles in a magnetic field with ionization trails

class ParticleChamber {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = 50;
    this.mouse = { x: 0, y: 0, active: false, prevX: 0, prevY: 0 };
    this.enabled = true; // Toggle state
    
    // Physics parameters
    this.magneticField = 0.01;
    this.friction = 0.99;
    this.emissionRate = 2;
    
    // Trail parameters
    this.maxTrailLength = 100;
    this.trailFadeSpeed = 0.015;
    
    this.resize();
    this.setupEventListeners();
    this.animate();
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  setupEventListeners() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.prevX = this.mouse.x;
      this.mouse.prevY = this.mouse.y;
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
      
      // Only emit particles if enabled and mouse is moving
      if (this.enabled) {
        const dx = this.mouse.x - this.mouse.prevX;
        const dy = this.mouse.y - this.mouse.prevY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 2) {
          this.emitParticles();
        }
      }
    });
    
    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });
    
    window.addEventListener('resize', () => this.resize());
  }
  
  enable() {
    this.enabled = true;
  }
  
  disable() {
    this.enabled = false;
    this.particles = []; // Clear all particles
    this.clearCanvas(); // Clear the canvas completely
  }
  
  toggle() {
    if (this.enabled) {
      this.disable();
    } else {
      this.enable();
    }
  }
  
  clearCanvas() {
    // Get theme for proper background color
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const bgColor = theme === 'dark' ? '#0d1117' : '#ffffff';
    
    this.ctx.fillStyle = bgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  emitParticles() {
    if (this.particles.length >= this.maxParticles) {
      return;
    }
    
    for (let i = 0; i < this.emissionRate; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      const spread = 5;
      
      this.particles.push({
        x: this.mouse.x + (Math.random() - 0.5) * spread,
        y: this.mouse.y + (Math.random() - 0.5) * spread,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        charge: Math.random() > 0.5 ? 1 : -1,
        life: 1.0,
        decay: 0.008 + Math.random() * 0.005,
        size: Math.random() * 1.5 + 1,
        trail: [],
        trailOpacity: 1.0
      });
    }
  }
  
  updateParticles() {
    if (!this.enabled) return;
    
    this.particles = this.particles.filter(particle => {
      particle.trail.push({
        x: particle.x,
        y: particle.y,
        opacity: particle.trailOpacity
      });
      
      if (particle.trail.length > this.maxTrailLength) {
        particle.trail.shift();
      }
      
      const forceMagnitude = this.magneticField * particle.charge;
      const fx = -particle.vy * forceMagnitude;
      const fy = particle.vx * forceMagnitude;
      
      particle.vx += fx;
      particle.vy += fy;
      particle.vx *= this.friction;
      particle.vy *= this.friction;
      
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      particle.life -= particle.decay;
      particle.trailOpacity -= this.trailFadeSpeed;
      
      return particle.life > 0 && 
             particle.x > -100 && particle.x < this.canvas.width + 100 &&
             particle.y > -100 && particle.y < this.canvas.height + 100;
    });
  }
  
  drawParticles() {
    // FIXED: Theme-aware background fade
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    
    // Use white fade for light mode, black fade for dark mode
    const fadeColor = theme === 'dark' 
      ? 'rgba(0, 0, 0, 0.05)'        // Black fade for dark mode
      : 'rgba(255, 255, 255, 0.05)'; // White fade for light mode
    
    this.ctx.fillStyle = fadeColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Theme-aware particle colors
    const baseColor = theme === 'dark' 
      ? { r: 200, g: 200, b: 220 } // Light blue-gray for dark mode
      : { r: 70, g: 70, b: 90 };   // Dark blue-gray for light mode
    
    this.particles.forEach(particle => {
      // Draw trail
      if (particle.trail.length > 1) {
        this.ctx.beginPath();
        this.ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
        
        for (let i = 1; i < particle.trail.length; i++) {
          const point = particle.trail[i];
          const progress = i / particle.trail.length;
          const opacity = particle.life * progress * 0.8;
          
          const r = baseColor.r;
          const g = baseColor.g;
          const b = baseColor.b;
          
          this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          this.ctx.lineWidth = particle.size * (0.5 + progress * 0.5);
          this.ctx.lineCap = 'round';
          this.ctx.lineJoin = 'round';
          
          this.ctx.lineTo(point.x, point.y);
          this.ctx.stroke();
          this.ctx.beginPath();
          this.ctx.moveTo(point.x, point.y);
        }
      }
      
      // Draw particle head
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${baseColor.r + 30}, ${baseColor.g + 30}, ${baseColor.b + 40}, ${particle.life})`;
      this.ctx.fill();
      
      // Add glow
      if (particle.life > 0.5) {
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b + 60}, ${particle.life * 0.6})`;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    });
  }
  
  animate() {
    this.updateParticles();
    this.drawParticles();
    
    requestAnimationFrame(() => this.animate());
  }
}

// FIXED: Toggle functionality with localStorage
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('particle-chamber-canvas');
  const toggleBtn = document.getElementById('particle-toggle');
  
  if (!canvas) return;
  
  // Initialize particle system
  window.particleChamber = new ParticleChamber(canvas);
  
  // Check saved preference
  const particlesEnabled = localStorage.getItem('particlesEnabled') !== 'false';
  
  if (!particlesEnabled) {
    window.particleChamber.disable();
  }
  
  // Set up toggle button
  if (toggleBtn) {
    // Update button appearance based on state
    const updateButton = (enabled) => {
      if (enabled) {
        toggleBtn.innerHTML = '⚛️'; // Atom symbol when enabled
        toggleBtn.style.opacity = '1';
      } else {
        toggleBtn.innerHTML = '⚛️'; // Same icon but dimmed
        toggleBtn.style.opacity = '0.5';
      }
    };
    
    // Set initial button state
    updateButton(particlesEnabled);
    
    // Toggle on click
    toggleBtn.addEventListener('click', function() {
      window.particleChamber.toggle();
      const isEnabled = window.particleChamber.enabled;
      
      // Save preference
      localStorage.setItem('particlesEnabled', isEnabled);
      
      // Update button appearance
      updateButton(isEnabled);
    });
  }
});
