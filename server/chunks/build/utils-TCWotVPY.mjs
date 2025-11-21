import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function valueUpdater(updaterOrValue, ref) {
  ref.value = typeof updaterOrValue === "function" ? updaterOrValue(ref.value) : updaterOrValue;
}
function serializeQueryParams(params) {
  const searchParams = new URLSearchParams();
  const appendValue = (key, value) => {
    if (value === void 0 || value === null) {
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((item) => appendValue(key, item));
      return;
    }
    searchParams.append(key, String(value));
  };
  Object.entries(params).forEach(([key, value]) => appendValue(key, value));
  return searchParams.toString();
}

export { cn as c, serializeQueryParams as s, valueUpdater as v };
//# sourceMappingURL=utils-TCWotVPY.mjs.map
