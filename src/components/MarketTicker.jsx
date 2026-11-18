import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const INITIAL_PAIRS = [
  {
    pair: 'USD/AED',
    base: 'USD',
    quote: 'AED',
    name: 'US Dollar / UAE Dirham',
    bid: '3.6725',
    ask: '3.6730',
    change: '0.00%',
    positive: true,
    volume: '$98.5M',
    type: 'GCC Corporate Liquidity',
    settlement: 'T+0 Same-Day'
  },
  {
    pair: 'USD/SAR',
    base: 'USD',
    quote: 'SAR',
    name: 'US Dollar / Saudi Riyal',
    bid: '3.7502',
    ask: '3.7508',
    change: '+0.01%',
    positive: true,
    volume: '$84.2M',
    type: 'GCC Institutional Anchor',
    settlement: 'T+0 Same-Day'
  },
  {
    pair: 'USD/SGD',
    base: 'USD',
    quote: 'SGD',
    name: 'US Dollar / Singapore Dollar',
    bid: '1.3418',
    ask: '1.3422',
    change: '-0.12%',
    positive: false,
    volume: '$142.0M',
    type: 'Southeast Asian Hub',
    settlement: 'Real-Time RTGS'
  },
  {
    pair: 'USD/HKD',
    base: 'USD',
    quote: 'HKD',
    name: 'US Dollar / Hong Kong Dollar',
    bid: '7.8205',
    ask: '7.8215',
    change: '+0.02%',
    positive: true,
    volume: '$110.6M',
    type: 'East Asian Wholesale',
    settlement: 'Real-Time RTGS'
  },
  {
    pair: 'USD/JPY',
    base: 'USD',
    quote: 'JPY',
    name: 'US Dollar / Japanese Yen',
    bid: '154.55',
    ask: '154.65',
    change: '+0.45%',
    positive: true,
    volume: '$245.8M',
    type: 'Global Tier-1 Reserve',
    settlement: 'Real-Time RTGS'
  },
  {
    pair: 'USD/CNY',
    base: 'USD',
    quote: 'CNY',
    name: 'US Dollar / Chinese Yuan',
    bid: '7.2330',
    ask: '7.2350',
    change: '+0.08%',
    positive: true,
    volume: '$168.1M',
    type: 'APAC Trade Conduit',
    settlement: 'T+0 Same-Day'
  },
  {
    pair: 'USD/INR',
    base: 'USD',
    quote: 'INR',
    name: 'US Dollar / Indian Rupee',
    bid: '83.42',
    ask: '83.48',
    change: '-0.15%',
    positive: false,
    volume: '$92.3M',
    type: 'South Asian Commercial',
    settlement: 'T+0 Same-Day'
  },
  {
    pair: 'USD/MYR',
    base: 'USD',
    quote: 'MYR',
    name: 'US Dollar / Malaysian Ringgit',
    bid: '4.7120',
    ask: '4.7180',
    change: '+0.22%',
    positive: true,
    volume: '$46.7M',
    type: 'ASEAN Wholesale Flow',
    settlement: 'T+0 Same-Day'
  }
];

export default function MarketTicker({ showFullGrid = false }) {
  const [pairs] = useState(INITIAL_PAIRS);
  const [lastUpdated, setLastUpdated] = useState('Just now');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshRates = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated('Updated just now');
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated('Live synchronized');
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Ticker Bar Strip */}
      <div className="w-full bg-slate-50 border-y border-slate-200/90 overflow-hidden relative py-3">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center">
          <div className="shrink-0 pl-4 pr-3 sm:pl-6 sm:pr-4 flex items-center gap-2 border-r border-slate-200 z-20 bg-slate-50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800 whitespace-nowrap">
              Benchmark FX
            </span>
          </div>

          <div className="flex overflow-hidden select-none">
            <div className="flex animate-ticker whitespace-nowrap gap-6 sm:gap-8 items-center px-4">
              {pairs.concat(pairs).map((item, idx) => (
                <div 
                  key={`${item.pair}-${idx}`} 
                  className="inline-flex items-center gap-3 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs shadow-xs hover:border-amber-400 transition-colors"
                >
                  <span className="font-bold text-slate-900 tracking-wide">{item.pair}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 font-mono">B: {item.bid}</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-amber-700 font-mono font-semibold">A: {item.ask}</span>
                  </div>
                  <span 
                    className={`inline-flex items-center gap-0.5 font-bold text-[11px] ${
                      item.positive ? 'text-emerald-600' : 'text-rose-600'
                    }`}
                  >
                    {item.positive ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Mode */}
      {showFullGrid && (
        <div className="mt-8 max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Institutional Indicative Benchmark Rates
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  Wholesale Depth
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Indicative corporate rates for deal sizes exceeding $50,000 USD equivalent. Instant locked quotes provided via direct trade desk.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {lastUpdated}
              </span>
              <button
                onClick={refreshRates}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs transition-all focus:outline-none"
                title="Refresh Rates"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-amber-600' : ''}`} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pairs.map((item) => (
              <div
                key={item.pair}
                className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-500/70 hover:shadow-xl hover:shadow-slate-200/70 hover:scale-[1.01] transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-0.5">
                      {item.type}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                      {item.pair}
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate max-w-[170px]">{item.name}</p>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold ${
                      item.positive 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {item.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {item.change}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">We Buy (Bid)</span>
                    <span className="text-sm font-bold font-mono text-slate-900">{item.bid}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-50/60 border border-amber-100">
                    <span className="text-[10px] uppercase font-bold text-amber-800 block">We Sell (Ask)</span>
                    <span className="text-sm font-bold font-mono text-amber-700">{item.ask}</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    {item.settlement}
                  </span>
                  <span className="font-mono text-slate-400">24h: {item.volume}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Quotes reflect institutional wholesale tranches ($50k - $10M+). Spreads tighten automatically on ultra-high volumes.</span>
            </div>
            <a 
              href="https://wa.me/447865039625?text=Hello%20Trade%20Desk,%20please%20provide%20a%20firm%20executable%20quote%20for%20my%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-amber-950 font-bold underline underline-offset-4 whitespace-nowrap self-start sm:self-auto"
            >
              Request Custom Tranche Quote &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
