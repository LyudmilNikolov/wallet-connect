import { useAccount, useConnect, useDisconnect } from 'wagmi';

const App = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, error} = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: '#f9fafb',
        color: '#111827',
      }}
    >
      <div
        style={{
          padding: '2rem',
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
          minWidth: '320px',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🦊 MetaMask Connect</h1>

        {isConnected ? (
          <>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Connected:</strong><br />{address}
            </p>
            <button
              style={buttonStyle}
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </>
        ) : (
          <>
            {connectors.map((connector) => (
              <button
                key={connector.id}
                style={{ ...buttonStyle, marginBottom: '0.75rem' }}
                onClick={() => connect({ connector })}

              >
                {connector.name}

              </button>
            ))}
            {error && (
              <p style={{ color: '#dc2626', marginTop: '1rem' }}>
                {error.message}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#2563eb',
  color: '#ffffff',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.2s ease-in-out',
};

export default App;
