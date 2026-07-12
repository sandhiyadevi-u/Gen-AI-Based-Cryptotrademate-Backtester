# CryptoTradeMate 🚀

A comprehensive cryptocurrency trading strategy backtesting framework built in Python.

## Features ✨

- **Multiple Data Sources**: Support for Yahoo Finance, Binance API, and more
- **Built-in Strategies**: Moving Average Crossover, RSI, Momentum, and custom strategies
- **Comprehensive Backtesting**: Full simulation with realistic trading costs
- **Advanced Analytics**: Risk metrics, performance analysis, and trade statistics
- **Professional Visualizations**: Interactive charts and performance dashboards
- **Extensible Framework**: Easy to add new strategies and indicators

## Quick Start 🏁

```python
from src.data_loader import CryptoDataLoader
from src.strategies import MovingAverageCrossover
from src.backtesting_engine import BacktestingEngine

# Load data
loader = CryptoDataLoader()
data = loader.load_yahoo_data("BTC-USD")

# Create strategy
strategy = MovingAverageCrossover(short_window=20, long_window=50)

# Run backtest
engine = BacktestingEngine(initial_capital=100000)
results = engine.run_backtest(data, strategy)
```

## Installation 📦

```bash
git clone https://github.com/yourusername/cryptotrademate.git
cd cryptotrademate
pip install -r requirements.txt
python main.py
```

## Strategies Available 📈

1. **Moving Average Crossover**: Golden/Death cross signals
2. **RSI Strategy**: Overbought/oversold conditions
3. **Momentum Strategy**: Price rate of change signals
4. **Custom Strategies**: Easy framework for your own strategies

## Performance Metrics 📊

- Total Return & Risk-Adjusted Returns
- Sharpe, Sortino, and Calmar Ratios
- Maximum Drawdown Analysis
- Win Rate and Trade Statistics
- Volatility and Risk Metrics

## Project Structure 📁

```
cryptotrademate/
├── main.py                 # Main execution script
├── requirements.txt        # Dependencies
├── README.md              # This file
├── src/
│   ├── data_loader.py     # Data loading utilities
│   ├── strategies.py      # Trading strategies
│   ├── backtesting_engine.py # Core backtesting logic
│   ├── visualizer.py      # Chart and visualization tools
│   └── risk_analyzer.py   # Advanced risk metrics
└── examples/
    ├── basic_backtest.py   # Simple example
    ├── strategy_comparison.py # Compare strategies
    └── custom_strategy.py  # Custom strategy example
```

## Contributing 🤝

We welcome contributions! Please see our contributing guidelines for more details.

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer ⚠️

This tool is for educational and research purposes only. Past performance does not guarantee future results. Always do your own research before making investment decisions.
