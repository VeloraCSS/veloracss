import { createHmac, timingSafeEqual } from 'node:crypto';

export function verifyGitHubSignature({ secret, payloadBuffer, signatureHeader }) {
  if (!secret) {
    return {
      ok: true,
      verified: false,
      reason: 'webhook secret not configured'
    };
  }

  if (typeof signatureHeader !== 'string' || !signatureHeader.startsWith('sha256=')) {
    return {
      ok: false,
      verified: false,
      reason: 'missing x-hub-signature-256 header'
    };
  }

  const expectedSignature = `sha256=${createHmac('sha256', secret).update(payloadBuffer).digest('hex')}`;
  const actualBuffer = Buffer.from(signatureHeader);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (actualBuffer.length !== expectedBuffer.length) {
    return {
      ok: false,
      verified: false,
      reason: 'signature length mismatch'
    };
  }

  const matches = timingSafeEqual(actualBuffer, expectedBuffer);

  return {
    ok: matches,
    verified: true,
    reason: matches ? 'signature verified' : 'signature mismatch'
  };
}
