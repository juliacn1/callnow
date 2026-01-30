import { Metadata } from 'next';

// ICE-specific script - can be extended to support multiple issues
const SCRIPTS = {
  ice: {
    title: 'Protect Our Communities from ICE',
    intro: "Hi, my name is [YOUR NAME] and I'm a constituent from [YOUR CITY/TOWN].",
    body: `I'm calling to urge the Senator to take immediate action to protect our communities from ICE enforcement actions.

I am deeply concerned about the impact of immigration raids on families, workers, and the fabric of our neighborhoods. I urge the Senator to:

1. Publicly oppose ICE enforcement actions in sensitive locations like schools, hospitals, and courthouses

2. Support legislation that protects immigrant families and provides a pathway to citizenship

3. Demand accountability and transparency from ICE and CBP

4. Ensure due process rights are protected for all residents

This is a moral issue that affects all of us. Our community is stronger when families can stay together and people can live without fear.`,
    closing: "Thank you for your time. I'd appreciate a response about where the Senator stands on this issue.",
    source: 'Adapted from United We Dream and ACLU recommendations',
  },
};

async function getSenators(zip: string) {
  // For now, hardcode NY senators for demo
  // In production, this would call Google Civic API
  if (zip.startsWith('11') || zip.startsWith('10') || zip.startsWith('12') || zip.startsWith('13') || zip.startsWith('14')) {
    return [
      {
        name: 'Chuck Schumer',
        party: 'D',
        role: 'Senate Majority Leader',
        phone: '2022246542',
        phoneDisplay: '(202) 224-6542',
        image: 'https://www.congress.gov/img/member/s000148_200.jpg',
      },
      {
        name: 'Kirsten Gillibrand',
        party: 'D',
        role: 'U.S. Senator',
        phone: '2022244451',
        phoneDisplay: '(202) 224-4451',
        image: 'https://www.congress.gov/img/member/g000555_200.jpg',
      },
    ];
  }

  // Default fallback - in production use Civic API
  return [];
}

export async function generateMetadata({ params }: { params: Promise<{ zip: string }> }): Promise<Metadata> {
  return {
    title: 'Call Your Senator | CallNow',
    description: 'Make your voice heard. Call your senator about ICE enforcement in your community.',
    openGraph: {
      title: 'Call Your Senator | CallNow',
      description: 'Make your voice heard. Takes 2 minutes.',
    },
  };
}

export default async function CallPage({ params }: { params: Promise<{ zip: string }> }) {
  const { zip } = await params;
  const senators = await getSenators(zip);
  const script = SCRIPTS.ice;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="px-4 py-6 border-b border-slate-700">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold">CallNow</h1>
          <p className="text-slate-400 text-sm">Your voice matters. Make it heard.</p>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {/* Senators */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-300">Your Senators (ZIP: {zip})</h2>
          <div className="space-y-3">
            {senators.length > 0 ? (
              senators.map((senator) => (
                <a
                  key={senator.phone}
                  href={`tel:${senator.phone}`}
                  className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-slate-750 transition-all active:scale-98"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden flex-shrink-0">
                    {senator.image && (
                      <img src={senator.image} alt={senator.name} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold">{senator.name}</div>
                    <div className="text-sm text-slate-400">{senator.role}</div>
                    <div className="text-blue-400 font-mono text-sm">{senator.phoneDisplay}</div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-center">
                <p className="text-slate-400">No senators found for ZIP code {zip}</p>
                <p className="text-sm text-slate-500 mt-2">Please check your ZIP code and try again.</p>
              </div>
            )}
          </div>
        </section>

        {/* Script */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-300">Your Script</h2>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 space-y-4">
            <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-3">
              <p className="text-blue-200 font-medium">{script.title}</p>
            </div>

            <div className="space-y-4 text-slate-200">
              <p className="bg-yellow-900/20 border-l-4 border-yellow-600 pl-3 py-2 text-yellow-100">
                {script.intro}
              </p>

              <div className="whitespace-pre-line text-sm leading-relaxed">
                {script.body}
              </div>

              <p className="bg-green-900/20 border-l-4 border-green-600 pl-3 py-2 text-green-100">
                {script.closing}
              </p>
            </div>

            <p className="text-xs text-slate-500 pt-2 border-t border-slate-700">
              {script.source}
            </p>
          </div>
        </section>

        {/* Tips */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-300">Tips for Your Call</h2>
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Be polite but firm - staffers tally constituent calls</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>State your name and that you're a constituent</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>You'll likely speak to a staffer, not the Senator</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>It's OK to read from the script - they expect it</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">✓</span>
                <span>Call takes about 2 minutes</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Share */}
        <section className="pb-8">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl border border-blue-800 p-4 text-center">
            <p className="font-semibold mb-2">Made your call?</p>
            <p className="text-sm text-slate-300 mb-3">Share this with others. Every call counts.</p>
            <p className="text-blue-400 font-mono text-sm">Text CALL to [NUMBER]</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-4 py-6">
        <div className="max-w-lg mx-auto text-center text-xs text-slate-500">
          <p>CallNow is an open-source project.</p>
          <p className="mt-1">One call per person. Real voices, real impact.</p>
        </div>
      </footer>
    </div>
  );
}
