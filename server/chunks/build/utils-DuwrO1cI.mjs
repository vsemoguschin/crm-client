import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function valueUpdater(updaterOrValue, ref) {
  ref.value = typeof updaterOrValue === "function" ? updaterOrValue(ref.value) : updaterOrValue;
}

export { cn as c, valueUpdater as v };
//# sourceMappingURL=utils-DuwrO1cI.mjs.map
