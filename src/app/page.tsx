export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="px-4 py-6 border-b border-slate-700">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold">CallNow</h1>
          <p className="text-slate-400 text-sm">Your voice matters. Make it heard.</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-8 space-y-8">
        {/* Hero */}
        <section className="text-center space-y-4">
          <div className="text-6xl">📞</div>
          <h2 className="text-3xl font-bold">Call Your Senator</h2>
          <p className="text-slate-300 text-lg">
            Take 2 minutes to make your voice heard on the issues that matter.
          </p>
        </section>

        {/* How it works */}
        <section className="bg-slate-800 rounded-xl border border-slate-700 p-6">
          <h3 className="font-semibold text-lg mb-4">How it works</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-medium">Text CALL to</p>
                <p className="text-2xl font-mono text-blue-400">+1 (984) 279-7922</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-medium">Send your ZIP code</p>
                <p className="text-slate-400 text-sm">We&apos;ll find your senators</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-medium">Tap to call &amp; read the script</p>
                <p className="text-slate-400 text-sm">We give you exactly what to say</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Campaign */}
        <section>
          <h3 className="font-semibold text-lg mb-3 text-slate-300">Current Campaign</h3>
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-xl border border-red-800 p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <h4 className="font-semibold">Protect Our Communities from ICE</h4>
                <p className="text-sm text-slate-300 mt-1">
                  Urge your senators to oppose ICE enforcement actions and protect immigrant families in our communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start for Web */}
        <section>
          <h3 className="font-semibold text-lg mb-3 text-slate-300">Or enter your ZIP code</h3>
          <form action="/call" method="get" className="flex gap-2">
            <input
              type="text"
              name="zip"
              placeholder="e.g. 11201"
              pattern="[0-9]{5}"
              maxLength={5}
              required
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-lg font-mono"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Go
            </button>
          </form>
        </section>

        {/* Why Calls Matter */}
        <section className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
          <h3 className="font-semibold text-lg mb-3">Why phone calls matter</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span>Congressional staffers tally every call - your voice is literally counted</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span>Calls are more impactful than emails or social media</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span>Senators pay attention when call volumes spike on an issue</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-500">•</span>
              <span>It takes just 2 minutes and you&apos;ll likely talk to a staffer, not a machine</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center py-4">
          <a
            href="sms:+19842797922?body=CALL"
            className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-lg transition-colors"
          >
            📱 Text CALL Now
          </a>
          <p className="text-slate-500 text-sm mt-3">Opens your messaging app</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-4 py-6 mt-8">
        <div className="max-w-lg mx-auto text-center text-xs text-slate-500 space-y-2">
          <p>CallNow is an open-source project.</p>
          <p>One lookup per person per day. Real voices, real impact.</p>
          <p className="pt-2">
            <a href="https://github.com" className="text-slate-400 hover:text-white">
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
