// CryptoTradeMate JavaScript functionality

// Application data
const data = {
  "strategies": [
    {
      "name": "Moving Average Crossover",
      "total_return": 191.95,
      "total_return_pct": "191.95%",
      "final_capital": 291952.16,
      "sharpe_ratio": 0.776,
      "max_drawdown": -39.42,
      "max_drawdown_pct": "-39.42%",
      "win_rate": 50.00,
      "win_rate_pct": "50.00%",
      "total_trades": 10,
      "avg_trade_return": 23.73,
      "avg_trade_duration": 57.8,
      "best_trade": 230.98,
      "worst_trade": -23.54,
      "description": "Golden/Death cross signals using 50-day and 200-day moving averages. Excellent for capturing medium to long-term trends.",
      "color": "#3B82F6"
    },
    {
      "name": "RSI Strategy",
      "total_return": 99.69,
      "total_return_pct": "99.69%", 
      "final_capital": 199686.04,
      "sharpe_ratio": 0.589,
      "max_drawdown": -36.60,
      "max_drawdown_pct": "-36.60%",
      "win_rate": 66.67,
      "win_rate_pct": "66.67%",
      "total_trades": 45,
      "avg_trade_return": 2.31,
      "avg_trade_duration": 9.5,
      "best_trade": 26.82,
      "worst_trade": -21.87,
      "description": "Overbought/oversold signals using 14-period RSI with 30/70 thresholds. Best risk management profile.",
      "color": "#EF4444"
    },
    {
      "name": "Momentum Strategy", 
      "total_return": 53.56,
      "total_return_pct": "53.56%",
      "final_capital": 153558.96,
      "sharpe_ratio": 0.422,
      "max_drawdown": -56.06,
      "max_drawdown_pct": "-56.06%",
      "win_rate": 36.07,
      "win_rate_pct": "36.07%", 
      "total_trades": 61,
      "avg_trade_return": 1.90,
      "avg_trade_duration": 8.9,
      "best_trade": 98.77,
      "worst_trade": -20.64,
      "description": "Price rate of change signals with 10-day momentum and 2% threshold. High frequency trading approach.",
      "color": "#10B981"
    }
  ],
  "benchmark": {
    "name": "Buy & Hold",
    "total_return": 464.59,
    "total_return_pct": "464.59%",
    "description": "Passive investment strategy for comparison"
  },
  "features": [
    {
      "title": "Multiple Data Sources",
      "description": "Support for Yahoo Finance, Binance API, and other cryptocurrency data providers with robust fallback mechanisms",
      "icon": "📊"
    },
    {
      "title": "Built-in Strategies", 
      "description": "Pre-implemented Moving Average, RSI, Momentum, and Bollinger Bands strategies with customizable parameters",
      "icon": "⚡"
    },
    {
      "title": "Advanced Risk Analytics",
      "description": "Comprehensive metrics including Sharpe, Sortino, Calmar ratios, drawdown analysis, and volatility measures",
      "icon": "🛡️"
    },
    {
      "title": "Professional Visualizations",
      "description": "Interactive charts for equity curves, drawdown analysis, and performance comparisons using matplotlib and plotly",
      "icon": "📈"
    },
    {
      "title": "Extensible Framework",
      "description": "Object-oriented design with abstract base classes enabling easy addition of custom strategies and indicators",
      "icon": "🔧"
    },
    {
      "title": "Comprehensive Documentation",
      "description": "Complete documentation, examples, and best practices for professional trading system development",
      "icon": "📚"
    }
  ],
  "tech_stack": ["Python", "pandas", "numpy", "matplotlib", "seaborn", "plotly", "yfinance", "python-binance", "vectorbt"],
  "installation_steps": [
    "Clone the repository: git clone https://github.com/yourusername/cryptotrademate.git",
    "Install dependencies: pip install -r requirements.txt", 
    "Run the framework: python main.py",
    "Customize strategies in src/strategies.py",
    "Extend with your own trading logic"
  ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeFeatures();
    initializeStrategies();
    initializeResultsTable();
    initializeTechStack();
    initializeInstallationSteps();
    initializeSmoothScrolling();
    initializePerformanceChart();
    initializeMobileMenu();
    
    // Add fade-in animation to sections
    addScrollAnimations();
});

// Initialize Features Grid
function initializeFeatures() {
    const featuresGrid = document.querySelector('.features-grid');
    
    data.features.forEach(feature => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        
        featureCard.innerHTML = `
            <span class="feature-icon">${feature.icon}</span>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        
        featuresGrid.appendChild(featureCard);
    });
}

// Initialize Strategies Grid
function initializeStrategies() {
    const strategiesGrid = document.querySelector('.strategies-grid');
    
    data.strategies.forEach(strategy => {
        const strategyCard = document.createElement('div');
        strategyCard.className = 'strategy-card';
        strategyCard.style.setProperty('--strategy-color', strategy.color);
        
        strategyCard.innerHTML = `
            <div class="strategy-header">
                <h3>${strategy.name}</h3>
                <div class="strategy-return">${strategy.total_return_pct}</div>
            </div>
            <div class="strategy-metrics">
                <div class="metric">
                    <div class="metric-label">Sharpe Ratio</div>
                    <div class="metric-value">${strategy.sharpe_ratio.toFixed(3)}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Max Drawdown</div>
                    <div class="metric-value">${strategy.max_drawdown_pct}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Win Rate</div>
                    <div class="metric-value">${strategy.win_rate_pct}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Total Trades</div>
                    <div class="metric-value">${strategy.total_trades}</div>
                </div>
            </div>
            <p class="strategy-description">${strategy.description}</p>
        `;
        
        strategiesGrid.appendChild(strategyCard);
    });
}

// Initialize Results Table
function initializeResultsTable() {
    const resultsTable = document.querySelector('.results-table');
    
    const tableHTML = `
        <thead>
            <tr>
                <th>Strategy</th>
                <th>Total Return</th>
                <th>Sharpe Ratio</th>
                <th>Max Drawdown</th>
                <th>Win Rate</th>
                <th>Total Trades</th>
            </tr>
        </thead>
        <tbody>
            ${data.strategies.map(strategy => `
                <tr>
                    <td><strong>${strategy.name}</strong></td>
                    <td style="color: var(--color-success); font-weight: var(--font-weight-semibold);">${strategy.total_return_pct}</td>
                    <td>${strategy.sharpe_ratio.toFixed(3)}</td>
                    <td style="color: var(--color-error);">${strategy.max_drawdown_pct}</td>
                    <td>${strategy.win_rate_pct}</td>
                    <td>${strategy.total_trades}</td>
                </tr>
            `).join('')}
            <tr style="border-top: 2px solid var(--color-border); background: var(--color-bg-2);">
                <td><strong>${data.benchmark.name}</strong></td>
                <td style="color: var(--color-success); font-weight: var(--font-weight-semibold);">${data.benchmark.total_return_pct}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>1</td>
            </tr>
        </tbody>
    `;
    
    resultsTable.innerHTML = tableHTML;
}

// Initialize Performance Chart
function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    const chartData = {
        labels: data.strategies.map(s => s.name).concat([data.benchmark.name]),
        datasets: [{
            label: 'Total Return (%)',
            data: data.strategies.map(s => s.total_return).concat([data.benchmark.total_return]),
            backgroundColor: [
                '#1FB8CD',
                '#FFC185', 
                '#B4413C',
                '#5D878F'
            ],
            borderColor: [
                '#1FB8CD',
                '#FFC185',
                '#B4413C', 
                '#5D878F'
            ],
            borderWidth: 2
        }]
    };
    
    const config = {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Strategy Performance Comparison',
                    color: '#f5f5f5',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#a7a9a9',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(167, 169, 169, 0.2)'
                    }
                },
                x: {
                    ticks: {
                        color: '#a7a9a9'
                    },
                    grid: {
                        color: 'rgba(167, 169, 169, 0.2)'
                    }
                }
            }
        }
    };
    
    new Chart(ctx, config);
}

// Initialize Tech Stack
function initializeTechStack() {
    const techTags = document.querySelector('.tech-tags');
    
    data.tech_stack.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techTags.appendChild(tag);
    });
}

// Initialize Installation Steps
function initializeInstallationSteps() {
    const stepsList = document.querySelector('.installation-steps ol');
    
    data.installation_steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
}

// Initialize Smooth Scrolling Navigation
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle CTA buttons
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons[0].addEventListener('click', () => {
        document.getElementById('get-started').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    });
    
    heroButtons[1].addEventListener('click', () => {
        document.getElementById('results').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    });
}

// Initialize Mobile Menu
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
}

// Add Scroll Animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all major sections
    const sections = document.querySelectorAll('section, .feature-card, .strategy-card');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Active Navigation Highlighting
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize active navigation highlighting
updateActiveNavigation();

// Add performance optimization for scroll events
let ticking = false;

function updateScrollPosition() {
    updateActiveNavigation();
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to strategy cards
    const strategyCards = document.querySelectorAll('.strategy-card');
    strategyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });
    
    // Add click-to-copy functionality for code examples
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.style.cursor = 'pointer';
        block.title = 'Click to copy';
        
        block.addEventListener('click', function() {
            navigator.clipboard.writeText(this.textContent).then(() => {
                // Show temporary feedback
                const originalTitle = this.title;
                this.title = 'Copied!';
                setTimeout(() => {
                    this.title = originalTitle;
                }, 2000);
            });
        });
    });
});