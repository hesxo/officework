/**
 * Format a number as Sri Lankan Rupees (LKR).
 */
export function formatPrice(amount: number): string {
  return `LKR ${Number(amount).toLocaleString("en-LK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}
