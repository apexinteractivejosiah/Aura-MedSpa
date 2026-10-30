import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatPhoneNumber,
  isValidPhoneNumber,
  recommendTreatment,
  generateVoucherCode,
  TREATMENTS
} from './quizRules';

test('treatment catalog has complete valid data', () => {
  assert.ok(TREATMENTS.length >= 6, 'Should have at least 6 treatments');
  for (const t of TREATMENTS) {
    assert.ok(t.id, 'Treatment must have id');
    assert.ok(t.name, 'Treatment must have name');
    assert.ok(t.basePrice > 0, 'Base price must be positive');
    assert.ok(t.discountedPrice < t.basePrice, 'Discounted price must be 15% off base');
    // Check ~15% discount
    const expectedDiscounted = Math.round(t.basePrice * 0.85);
    assert.ok(
      Math.abs(t.discountedPrice - expectedDiscounted) <= 2,
      `Discounted price for ${t.name} should reflect ~15% discount`
    );
    assert.ok(t.sessionCount.length > 0, 'Must have session count recommendation');
  }
});

test('phone number formatting formats US 10-digit numbers', () => {
  assert.equal(formatPhoneNumber(''), '');
  assert.equal(formatPhoneNumber('5'), '(5');
  assert.equal(formatPhoneNumber('555'), '(555');
  assert.equal(formatPhoneNumber('555123'), '(555) 123');
  assert.equal(formatPhoneNumber('5551234567'), '(555) 123-4567');
  assert.equal(formatPhoneNumber('(555) 123-4567890'), '(555) 123-4567');
});

test('phone number validation accepts valid 10-digit numbers', () => {
  assert.equal(isValidPhoneNumber('(555) 123-4567'), true);
  assert.equal(isValidPhoneNumber('5551234567'), true);
  assert.equal(isValidPhoneNumber('555-123'), false);
  assert.equal(isValidPhoneNumber(''), false);
});

test('recommendTreatment provides tailored protocol for aging and contouring', () => {
  const resultContour = recommendTreatment({
    concern: 'contouring',
    skinType: 'normal',
    downtime: 'moderate',
    budget: 'premium'
  });

  assert.equal(resultContour.primaryTreatment.id, 'morpheus8_rf');
  assert.ok(resultContour.clinicianRationale.includes('mandibular definition') || resultContour.clinicianRationale.includes('Morpheus8'));
  assert.ok(resultContour.voucherCode.startsWith('AURA-SCULPT-'));
});

test('recommendTreatment respects zero downtime request for glow', () => {
  const resultGlow = recommendTreatment({
    concern: 'glow',
    skinType: 'dry',
    downtime: 'zero',
    budget: 'accessible'
  });

  assert.equal(resultGlow.primaryTreatment.downtimeRating, 'zero');
  assert.ok(['hydrafacial_platinum', 'biorepeel_cryo', 'sciton_bbl_hero'].includes(resultGlow.primaryTreatment.id));
  assert.ok(resultGlow.voucherCode.startsWith('AURA-LUMEN-'));
});

test('generateVoucherCode generates distinct codes with category prefix', () => {
  const codeAging = generateVoucherCode('aging');
  const codeAcne = generateVoucherCode('acne');
  assert.match(codeAging, /^AURA-TIMELESS-\d{4}$/);
  assert.match(codeAcne, /^AURA-PURIFY-\d{4}$/);
});
