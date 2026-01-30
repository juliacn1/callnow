import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'CallNow - Call Your Rep';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>📞</div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
          }}
        >
          Call Your Rep
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Take 5 minutes to make your voice heard
        </div>
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 50,
            color: '#60a5fa',
            fontSize: 24,
          }}
        >
          <span>Enter ZIP</span>
          <span>→</span>
          <span>Get Script</span>
          <span>→</span>
          <span>Tap to Call</span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: '#64748b',
          }}
        >
          callnow-iota.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
