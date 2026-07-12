#!/usr/bin/env python3
"""
CryptoTradeMate - Cryptocurrency Trading Strategy Backtester
============================================================

Main entry point for the CryptoTradeMate backtesting framework.
This script demonstrates how to use the framework to backtest 
cryptocurrency trading strategies.

Author: CryptoTradeMate Team
Version: 1.0
"""

from src.data_loader import CryptoDataLoader
from src.strategies import MovingAverageCrossover, RSIStrategy, MomentumStrategy
from src.backtesting_engine import BacktestingEngine
from src.visualizer import ResultsVisualizer

def main():
    """Main execution function"""
    print("🚀 Welcome to CryptoTradeMate!")
    print("="*50)

    # Initialize components
    loader = CryptoDataLoader()
    engine = BacktestingEngine(initial_capital=100000, commission=0.001)

    # Load data
    print("📊 Loading cryptocurrency data...")
    data = loader.load_yahoo_data("BTC-USD", period="2y")

    # Initialize strategies
    strategies = [
        MovingAverageCrossover(short_window=20, long_window=50),
        RSIStrategy(rsi_period=14, oversold=30, overbought=70),
        MomentumStrategy(momentum_period=10, threshold=0.02)
    ]

    # Run backtests
    print("⚡ Running backtests...")
    results = {}
    for strategy in strategies:
        result = engine.run_backtest(data, strategy)
        results[strategy.name] = result

    # Visualize results
    print("📈 Creating visualizations...")
    visualizer = ResultsVisualizer()
    visualizer.plot_strategy_comparison(results)
    visualizer.plot_drawdown_analysis(results)

    print("✅ Backtesting completed successfully!")
    return results

if __name__ == "__main__":
    main()
