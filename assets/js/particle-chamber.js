// Particle Cloud Chamber Effect
// Simulates charged particles in a magnetic field

class ParticleChamber {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.maxParticles = 50;
    this.mouse = { x: 0, y: 0, active: false };
    
    // Physics parameters
    this.magneticField = 0.02; // Magnetic field strength
    this.friction = 0.98; // Energy loss
    this.emissionRate = 3; // Particles per frame when mouse moves
    
    this.resize();
    this.setupEventListeners();
    this.animate();
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  setupEventListeners() {
    // Track mouse movement
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      this.mouse.active = true;
      
      // Emit particles when mouse moves
      this.emitParticles();
    });
    
    // Stop emitting when mouse leaves window
    window.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });
    
    // Handle window resize
    window.addEventListener('resize', () => this.resize());
  }
  
  emitParticles() {
    if (this.particles.length >= this.maxParticles) {
      return; // Don't exceed particle limit
    }
    
    // Emit multiple particles for trail effect
    for (let i = 0; i < this.emissionRate; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      
      this.particles.push({
        x: this.mouse.x,
        y: this.mouse.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        charge: Math.random() > 0.5 ? 1 : -1, // Positive or negative charge
        life: 1.0, // Opacity/lifetime
        decay: 0.01 + Math.random() * 0.01,
        size: Math.random() * 2 + 1
      });
    }
  }
  
  updateParticles() {
    // Update and remove dead particles
    this.particles = this.particles.filter(particle => {
      // Apply Lorentz force (F = q(v × B))
      // Simplified 2D magnetic field pointing out of screen
      const forceMagnitude = this.magneticField * particle.charge;
      
      // Perpendicular force creates spiral motion
      const fx = -particle.vy * forceMagnitude;
      const fy = particle.vx * forceMagnitude;
      
      // Update velocity
      particle.vx += fx;
      particle.vy += fy;
      
      // Apply friction (energy loss)
      particle.vx *= this.friction;
      particle.vy *= this.friction;
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Decrease lifetime
      particle.life -= particle.decay;
      
      // Keep particle if still alive and on screen
      return particle.life > 0 && 
             particle.x > -50 && particle.x < this.canvas.width + 50 &&
             particle.y > -50 && particle.y < this.canvas.height + 50;
    });
  }
  
  drawParticles() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Get theme colors
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const particleColor = theme === 'dark' 
      ? 'rgba(200, 200, 200,' // Light gray for dark mode
      : 'rgba(80, 80, 80,';    // Dark gray for light mode
    
    // Draw each particle
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = particleColor + particle.life + ')';
      this.ctx.fill();
      
      // Optional: Add glow effect
      if (particle.life > 0.7) {
        this.ctx.shadowBlur = 4;
        this.ctx.shadowColor = particleColor + particle.life + ')';
      } else {
        this.ctx.shadowBlur = 0;
      }
    });
  }
  
  drawConnections() {
    // Optional: Draw connections between nearby particles
    const connectionDistance = 80;
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const lineColor = theme === 'dark' ? 'rgba(200, 200, 200,' : 'rgba(80, 80, 80,';
    
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * Math.min(p1.life, p2.life) * 0.3;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = lineColor + opacity + ')';
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }
  }
  
  animate() {
    this.updateParticles();
    this.drawParticles();
    //this.drawConnections(); // Comment this out if you don't want connection lines
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('particle-chamber-canvas');
  if (canvas) {
    window.particleChamber = new ParticleChamber(canvas);
  }
});

// Toggle particle effect on/off
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('particle-chamber-canvas');
  const toggleBtn = document.getElementById('particle-toggle');
  
  if (canvas && toggleBtn) {
    let particlesEnabled = localStorage.getItem('particlesEnabled') !== 'false';
    
    // Set initial state
    canvas.style.display = particlesEnabled ? 'block' : 'none';
    
    toggleBtn.addEventListener('click', function() {
      particlesEnabled = !particlesEnabled;
      canvas.style.display = particlesEnabled ? 'block' : 'none';
      localStorage.setItem('particlesEnabled', particlesEnabled);
    });
    
    // Initialize particle system if enabled
    if (particlesEnabled && canvas) {
      window.particleChamber = new ParticleChamber(canvas);
    }
  }
});
