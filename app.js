const products = [
  {
    id: 'mouse-eclipse',
    name: 'Eclipse Pro Wireless Mouse',
    brand: 'Aura Labs',
    category: 'Mice',
    price: 149.99,
    compareAt: 179.99,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae magna lacus. Integer convallis velit at euismod mattis.',
    options: ['Onyx Black', 'Aurora White'],
    tags: ['featured', 'deal'],
    image: {
      src: 'https://placehold.co/600x600/png?text=Eclipse+Mouse',
      width: 600,
      height: 600,
      alt: 'Eclipse Pro Wireless Mouse product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Eclipse+Mouse', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Eclipse+Mouse', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Eclipse+Angle',
        width: 900,
        height: 900,
        alt: 'Eclipse mouse angled view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Eclipse+Grip',
        width: 900,
        height: 900,
        alt: 'Eclipse mouse grip detail',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Eclipse+Hero',
        width: 900,
        height: 900,
        alt: 'Eclipse mouse hero shot on desk mat',
      },
    ],
  },
  {
    id: 'mouse-vega',
    name: 'Vega Ultralight Mouse',
    brand: 'Aura Labs',
    category: 'Mice',
    price: 119,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta tortor vel orci imperdiet finibus.',
    options: ['Nightfall', 'Nebula'],
    tags: ['featured'],
    image: {
      src: 'https://placehold.co/600x600/png?text=Vega+Mouse',
      width: 600,
      height: 600,
      alt: 'Vega Ultralight Mouse product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Vega+Mouse', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Vega+Mouse', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Vega+Top',
        width: 900,
        height: 900,
        alt: 'Vega mouse top view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Vega+Side',
        width: 900,
        height: 900,
        alt: 'Vega mouse side profile',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Vega+Detail',
        width: 900,
        height: 900,
        alt: 'Vega mouse RGB detail',
      },
    ],
  },
  {
    id: 'mouse-celestial',
    name: 'Celestial Tournament Mouse',
    brand: 'Nova Core',
    category: 'Mice',
    price: 99.99,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non iaculis mauris. Sed porttitor lorem ut ligula bibendum aliquam.',
    options: ['Phantom Black', 'Cosmic Teal'],
    tags: ['featured'],
    image: {
      src: 'https://placehold.co/600x600/png?text=Celestial+Mouse',
      width: 600,
      height: 600,
      alt: 'Celestial Tournament Mouse product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Celestial+Mouse', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Celestial+Mouse', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Celestial+Angle',
        width: 900,
        height: 900,
        alt: 'Celestial mouse angled view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Celestial+Macro',
        width: 900,
        height: 900,
        alt: 'Celestial mouse macro shot',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Celestial+Setup',
        width: 900,
        height: 900,
        alt: 'Celestial mouse in gaming setup',
      },
    ],
  },
  {
    id: 'mouse-phantom',
    name: 'Phantom Elite Mini',
    brand: 'Spectra Forge',
    category: 'Mice',
    price: 139.5,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et arcu sodales, posuere urna sit amet, fermentum dolor.',
    options: ['Stealth Matte', 'Iridescent'],
    tags: ['featured'],
    image: {
      src: 'https://placehold.co/600x600/png?text=Phantom+Mini',
      width: 600,
      height: 600,
      alt: 'Phantom Elite Mini mouse product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Phantom+Mini', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Phantom+Mini', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Phantom+Detail',
        width: 900,
        height: 900,
        alt: 'Phantom mini detail view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Phantom+Grip',
        width: 900,
        height: 900,
        alt: 'Phantom mini grip view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Phantom+Case',
        width: 900,
        height: 900,
        alt: 'Phantom mini carrying case',
      },
    ],
  },
  {
    id: 'keyboard-stratus',
    name: 'Stratus 75 Mechanical Keyboard',
    brand: 'Aura Labs',
    category: 'Keyboards',
    price: 189.99,
    compareAt: 209.99,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt luctus gravida. Integer malesuada sem sed erat efficitur vehicula.',
    options: ['Linear Switches', 'Tactile Switches'],
    tags: ['deal'],
    image: {
      src: 'https://placehold.co/600x600/png?text=Stratus+75',
      width: 600,
      height: 600,
      alt: 'Stratus 75 mechanical keyboard product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Stratus+75', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Stratus+75', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Stratus+Top',
        width: 900,
        height: 900,
        alt: 'Stratus keyboard top view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Stratus+Side',
        width: 900,
        height: 900,
        alt: 'Stratus keyboard side profile',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Stratus+RGB',
        width: 900,
        height: 900,
        alt: 'Stratus keyboard RGB lighting',
      },
    ],
  },
  {
    id: 'keyboard-nebula',
    name: 'Nebula 80 Hot-Swap Keyboard',
    brand: 'Keystone',
    category: 'Keyboards',
    price: 219.99,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut interdum metus. Curabitur at odio sit amet purus porta facilisis.',
    options: ['Frost', 'Obsidian'],
    tags: [],
    image: {
      src: 'https://placehold.co/600x600/png?text=Nebula+80',
      width: 600,
      height: 600,
      alt: 'Nebula 80 keyboard product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Nebula+80', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Nebula+80', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Nebula+Top',
        width: 900,
        height: 900,
        alt: 'Nebula keyboard top view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Nebula+Side',
        width: 900,
        height: 900,
        alt: 'Nebula keyboard side profile',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Nebula+RGB',
        width: 900,
        height: 900,
        alt: 'Nebula keyboard RGB lighting',
      },
    ],
  },
  {
    id: 'keyboard-orion',
    name: 'Orion Low-Profile Keyboard',
    brand: 'Spectra Forge',
    category: 'Keyboards',
    price: 199.5,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed neque tincidunt, tempor nisi eget, gravida nisl.',
    options: ['Silent Red', 'Speed Silver'],
    tags: [],
    image: {
      src: 'https://placehold.co/600x600/png?text=Orion+Keyboard',
      width: 600,
      height: 600,
      alt: 'Orion low-profile keyboard product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Orion+Keyboard', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Orion+Keyboard', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Orion+Desk',
        width: 900,
        height: 900,
        alt: 'Orion keyboard on desk',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Orion+Angle',
        width: 900,
        height: 900,
        alt: 'Orion keyboard angled view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Orion+Keys',
        width: 900,
        height: 900,
        alt: 'Orion keyboard keycaps closeup',
      },
    ],
  },
  {
    id: 'keyboard-hyperion',
    name: 'Hyperion Compact Keyboard',
    brand: 'Nova Core',
    category: 'Keyboards',
    price: 174.99,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed lacinia urna, eget posuere nisl.',
    options: ['65% Layout', '75% Layout'],
    tags: [],
    image: {
      src: 'https://placehold.co/600x600/png?text=Hyperion+Keyboard',
      width: 600,
      height: 600,
      alt: 'Hyperion compact keyboard product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Hyperion+Keyboard', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Hyperion+Keyboard', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Hyperion+Top',
        width: 900,
        height: 900,
        alt: 'Hyperion keyboard top view',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Hyperion+Side',
        width: 900,
        height: 900,
        alt: 'Hyperion keyboard side profile',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Hyperion+Switches',
        width: 900,
        height: 900,
        alt: 'Hyperion keyboard switch plate',
      },
    ],
  },
  {
    id: 'mousepad-artisan',
    name: 'Artisan Mousepad Series',
    brand: 'Aura Labs',
    category: 'Mousepads',
    price: 39.99,
    compareAt: 49.99,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus augue in lorem tristique, eu sodales sapien tristique.',
    options: ['Standard', 'XL'],
    tags: ['deal'],
    image: {
      src: 'https://placehold.co/600x600/png?text=Artisan+Mousepad',
      width: 600,
      height: 600,
      alt: 'Artisan mousepad product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Artisan+Mousepad', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Artisan+Mousepad', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Artisan+Detail',
        width: 900,
        height: 900,
        alt: 'Artisan mousepad texture closeup',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Artisan+Desk',
        width: 900,
        height: 900,
        alt: 'Artisan mousepad on gaming desk',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Artisan+Roll',
        width: 900,
        height: 900,
        alt: 'Artisan mousepad rolled up',
      },
    ],
  },
  {
    id: 'mousepad-aurora',
    name: 'Aurora Speed Mousepad',
    brand: 'Spectra Forge',
    category: 'Mousepads',
    price: 59.99,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ultricies ex. Suspendisse potenti.',
    options: ['Medium', 'Large'],
    tags: [],
    image: {
      src: 'https://placehold.co/600x600/png?text=Aurora+Mousepad',
      width: 600,
      height: 600,
      alt: 'Aurora speed mousepad product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Aurora+Mousepad', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Aurora+Mousepad', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Aurora+Detail',
        width: 900,
        height: 900,
        alt: 'Aurora mousepad stitching detail',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Aurora+Desk',
        width: 900,
        height: 900,
        alt: 'Aurora mousepad on desk setup',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Aurora+Lighting',
        width: 900,
        height: 900,
        alt: 'Aurora mousepad lighting detail',
      },
    ],
  },
  {
    id: 'mousepad-spectral',
    name: 'Spectral Control Mousepad',
    brand: 'Nova Core',
    category: 'Mousepads',
    price: 44.5,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel fringilla lorem, sed rhoncus orci.',
    options: ['Standard', 'XL', 'Desk'],
    tags: [],
    image: {
      src: 'https://placehold.co/600x600/png?text=Spectral+Mousepad',
      width: 600,
      height: 600,
      alt: 'Spectral control mousepad product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Spectral+Mousepad', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Spectral+Mousepad', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Spectral+Detail',
        width: 900,
        height: 900,
        alt: 'Spectral mousepad surface detail',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Spectral+Desk',
        width: 900,
        height: 900,
        alt: 'Spectral mousepad with keyboard and mouse',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Spectral+Roll',
        width: 900,
        height: 900,
        alt: 'Spectral mousepad rolled for travel',
      },
    ],
  },
  {
    id: 'mousepad-titan',
    name: 'Titan XL Esports Mousepad',
    brand: 'Aura Labs',
    category: 'Mousepads',
    price: 69.99,
    currency: 'USD',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin interdum lacus, eget malesuada felis tempor id.',
    options: ['XL', 'XXL'],
    tags: ['deal'],
    compareAt: 79.99,
    image: {
      src: 'https://placehold.co/600x600/png?text=Titan+Mousepad',
      width: 600,
      height: 600,
      alt: 'Titan XL esports mousepad product image',
      srcset: [
        { src: 'https://placehold.co/400x400/png?text=Titan+Mousepad', width: 400 },
        { src: 'https://placehold.co/600x600/png?text=Titan+Mousepad', width: 600 },
      ],
    },
    gallery: [
      {
        src: 'https://placehold.co/900x900/png?text=Titan+Setup',
        width: 900,
        height: 900,
        alt: 'Titan mousepad in esports setup',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Titan+Edge',
        width: 900,
        height: 900,
        alt: 'Titan mousepad stitched edge',
      },
      {
        src: 'https://placehold.co/900x900/png?text=Titan+Surface',
        width: 900,
        height: 900,
        alt: 'Titan mousepad surface closeup',
      },
    ],
  },
];
const featuredProductIds = ['mouse-eclipse', 'mouse-vega', 'mouse-celestial', 'mouse-phantom'];
const productLookup = new Map(products.map((product) => [product.id, product]));

const CART_STORAGE_KEY = 'aura:cart';
const locale = typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en-US';
const formatterCache = new Map();

function formatPrice(value, currency = 'USD') {
  const key = `${currency}`;
  if (!formatterCache.has(key)) {
    formatterCache.set(key, new Intl.NumberFormat(locale, { style: 'currency', currency }));
  }
  return formatterCache.get(key).format(value);
}

function applyImageSources(img, image, sizes) {
  img.src = image.src;
  if (Array.isArray(image.srcset) && image.srcset.length > 0) {
    img.srcset = image.srcset.map((entry) => `${entry.src} ${entry.width}w`).join(', ');
    if (sizes) {
      img.sizes = sizes;
    }
  } else {
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
  }
  img.width = image.width;
  img.height = image.height;
  if (image.alt) {
    img.alt = image.alt;
  }
}

function createPriceDisplay(product, { size = 'lg', includeSave = true } = {}) {
  const container = document.createElement('div');
  container.className = 'flex flex-wrap items-baseline gap-2';
  const hasCompare = typeof product.compareAt === 'number' && product.compareAt > product.price;

  if (hasCompare) {
    const compare = document.createElement('span');
    compare.className = size === 'xl' ? 'text-base text-gray-500 line-through' : 'text-sm text-gray-500 line-through';
    compare.textContent = formatPrice(product.compareAt, product.currency);
    container.appendChild(compare);
  }

  const price = document.createElement('span');
  price.className =
    size === 'xl'
      ? 'text-2xl font-semibold text-white'
      : size === 'lg'
      ? 'text-xl font-semibold text-white'
      : 'text-base font-semibold text-white';
  price.textContent = formatPrice(product.price, product.currency);
  container.appendChild(price);

  if (hasCompare && includeSave) {
    const savings = document.createElement('span');
    savings.className = 'text-xs text-brand/80';
    savings.textContent = `Save ${formatPrice(product.compareAt - product.price, product.currency)}`;
    container.appendChild(savings);
  }

  return container;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return char;
    }
  });
}

function highlightMatch(text, query) {
  if (!query) return escapeHtml(text);
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  let startIndex = 0;
  let result = '';
  let matchIndex = lowerText.indexOf(lowerQuery, startIndex);

  if (matchIndex === -1) {
    return escapeHtml(text);
  }

  while (matchIndex !== -1) {
    result += escapeHtml(text.slice(startIndex, matchIndex));
    result += `<mark class="rounded bg-brand/30 px-1 text-current">${escapeHtml(
      text.slice(matchIndex, matchIndex + lowerQuery.length)
    )}</mark>`;
    startIndex = matchIndex + lowerQuery.length;
    matchIndex = lowerText.indexOf(lowerQuery, startIndex);
  }

  result += escapeHtml(text.slice(startIndex));
  return result;
}

function scoreProduct(product, query) {
  const lower = query.toLowerCase();
  let score = 0;
  if (product.name.toLowerCase().includes(lower)) score += 3;
  if (product.brand.toLowerCase().includes(lower)) score += 2;
  if (product.category.toLowerCase().includes(lower)) score += 1;
  return score;
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function getProduct(productId) {
  return productLookup.get(productId);
}

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((item) => ({
        id: item?.id,
        quantity: Number.parseInt(item?.quantity, 10),
      }))
      .filter((item) => typeof item.id === 'string' && Number.isFinite(item.quantity) && item.quantity > 0)
      .map((item) => ({ id: item.id, quantity: item.quantity }));
  } catch (error) {
    console.warn('Unable to load cart from storage', error);
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn('Unable to save cart to storage', error);
  }
}

const state = {
  cart: loadCart(),
  activeFilter: 'All',
  activeProduct: null,
  modalQuantity: 1,
};

const cart = state.cart;
const quickAddTimeouts = new Map();
let cartRenderFrame = null;
let modalGalleryImages = [];
let focusTrapCleanup = null;
let lastActiveElement = null;

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), select:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function trapFocus(container) {
  function getNodes() {
    return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
      (node) => !node.hasAttribute('disabled')
    );
  }

  function handleKeyDown(event) {
    if (event.key !== 'Tab') return;
    const nodes = getNodes();
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      last.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === last) {
      first.focus();
      event.preventDefault();
    }
  }

  container.addEventListener('keydown', handleKeyDown);
  focusTrapCleanup = () => container.removeEventListener('keydown', handleKeyDown);
}

function releaseFocus() {
  if (focusTrapCleanup) {
    focusTrapCleanup();
    focusTrapCleanup = null;
  }
}

function openDialog(element) {
  if (!element) return;
  releaseFocus();
  lastActiveElement = document.activeElement;
  element.classList.remove('hidden');
  document.body.classList.add('modal-open');
  trapFocus(element);
  const focusTarget = element.querySelector('[data-autofocus]') || element.querySelector(FOCUSABLE_SELECTOR);
  if (focusTarget) {
    focusTarget.focus({ preventScroll: true });
  }
}

function closeDialog(element) {
  if (!element) return;
  element.classList.add('hidden');
  releaseFocus();
  const openDialogs = document.querySelectorAll('[role="dialog"]:not(.hidden)');
  if (openDialogs.length === 0) {
    document.body.classList.remove('modal-open');
  }
  if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
    lastActiveElement.focus({ preventScroll: true });
  }
  lastActiveElement = null;
}
const featuredGrid = document.getElementById('featured-grid');
const productGrid = document.getElementById('product-grid');
const productEmptyState = document.getElementById('product-empty-state');
const dealGrid = document.getElementById('deal-grid');
const cartItemsContainer = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartCountEl = document.getElementById('cart-count');
const filterTabs = document.querySelectorAll('.filter-tab');
const navFilterLinks = document.querySelectorAll('[data-nav-filter]');
const productModal = document.getElementById('product-modal');
const cartModal = document.getElementById('cart-modal');
const searchOverlay = document.getElementById('search-overlay');
const modalProductName = document.getElementById('modal-product-name');
const modalProductBrand = document.getElementById('modal-product-brand');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductDescription = document.getElementById('modal-product-description');
const modalOptions = document.getElementById('modal-options');
const modalGallery = document.getElementById('modal-gallery');
const modalPrimaryImage = document.getElementById('modal-primary-image');
const modalQuantityDisplay = document.getElementById('modal-quantity');
const modalQuantityDecrease = document.getElementById('modal-quantity-decrease');
const modalQuantityIncrease = document.getElementById('modal-quantity-increase');
const modalAddToCartButton = document.getElementById('modal-add-to-cart');
const closeProductButton = document.getElementById('close-product');
const openCartButton = document.getElementById('open-cart');
const closeCartButton = document.getElementById('close-cart');
const openSearchButton = document.getElementById('open-search');
const closeSearchButton = document.getElementById('close-search');
const checkoutButton = document.getElementById('checkout-button');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const yearEl = document.getElementById('year');
const liveRegion = document.getElementById('a11y-live');

if (cartItemsContainer) {
  cartItemsContainer.setAttribute('role', 'list');
}

function announce(message) {
  if (!liveRegion) return;
  liveRegion.textContent = '';
  setTimeout(() => {
    liveRegion.textContent = message;
  }, 50);
}

function scheduleCartRender() {
  if (cartRenderFrame) {
    cancelAnimationFrame(cartRenderFrame);
  }
  cartRenderFrame = requestAnimationFrame(() => {
    cartRenderFrame = null;
    renderCart();
  });
}

function updateCartButtonLabel(count) {
  if (!openCartButton) return;
  if (count === 0) {
    openCartButton.setAttribute('aria-label', 'Open shopping cart');
  } else {
    openCartButton.setAttribute(
      'aria-label',
      `Open shopping cart (${count} item${count === 1 ? '' : 's'})`
    );
  }
}

function renderCart() {
  if (!cartItemsContainer || !cartSubtotalEl || !cartCountEl) return;
  cartItemsContainer.textContent = '';
  let subtotal = 0;
  let totalItems = 0;
  let currency = 'USD';
  let hasCurrency = false;

  if (cart.length === 0) {
    const message = document.createElement('p');
    message.className = 'text-sm text-gray-500';
    message.textContent = 'Your cart is currently empty. Discover precision gear crafted for champions.';
    cartItemsContainer.appendChild(message);
  } else {
    const fragment = document.createDocumentFragment();
    cart.forEach((item) => {
      const product = getProduct(item.id);
      if (!product) return;
      const quantity = item.quantity;
      totalItems += quantity;
      const lineTotal = product.price * quantity;
      subtotal += lineTotal;
      if (!hasCurrency) {
        currency = product.currency;
        hasCurrency = true;
      }

      const cartItem = document.createElement('div');
      cartItem.className = 'flex items-center gap-4 rounded-2xl border border-white/5 bg-black/30 p-4';
      cartItem.setAttribute('role', 'listitem');

      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'h-16 w-16 overflow-hidden rounded-xl bg-black/50';
      const image = document.createElement('img');
      applyImageSources(image, product.image, '(min-width: 640px) 64px, 64px');
      image.loading = 'lazy';
      image.decoding = 'async';
      image.className = 'h-full w-full object-cover';
      imageWrapper.appendChild(image);

      const info = document.createElement('div');
      info.className = 'flex-1';

      const header = document.createElement('div');
      header.className = 'flex items-start justify-between gap-3';

      const titleGroup = document.createElement('div');
      const name = document.createElement('h4');
      name.className = 'text-sm font-semibold text-white';
      name.textContent = product.name;
      const brand = document.createElement('p');
      brand.className = 'text-xs text-gray-400';
      brand.textContent = product.brand;
      titleGroup.appendChild(name);
      titleGroup.appendChild(brand);

      const removeButton = document.createElement('button');
      removeButton.type = 'button';
      removeButton.className = 'text-gray-500 transition hover:text-white focus-ring';
      removeButton.setAttribute('aria-label', `Remove ${product.name} from cart`);
      removeButton.dataset.removeId = product.id;
      removeButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.68.107 1.022.165m-1.022-.165L19.423 19.75A1.125 1.125 0 0 1 18.304 21H5.697a1.125 1.125 0 0 1-1.119-1.25L5.772 5.79m13.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>';

      header.appendChild(titleGroup);
      header.appendChild(removeButton);

      const controls = document.createElement('div');
      controls.className = 'mt-3 flex items-center justify-between';

      const quantityGroup = document.createElement('div');
      quantityGroup.className = 'flex items-center rounded-full border border-white/10';

      const decreaseButton = document.createElement('button');
      decreaseButton.type = 'button';
      decreaseButton.className = 'px-3 py-1 text-xs text-gray-400 transition hover:text-white focus-ring';
      decreaseButton.dataset.change = '-1';
      decreaseButton.dataset.productId = product.id;
      decreaseButton.setAttribute('aria-label', `Decrease quantity of ${product.name}`);
      decreaseButton.textContent = '-';

      const quantityLabel = document.createElement('span');
      quantityLabel.className = 'px-3 text-sm font-semibold text-white';
      quantityLabel.textContent = String(quantity);

      const increaseButton = document.createElement('button');
      increaseButton.type = 'button';
      increaseButton.className = 'px-3 py-1 text-xs text-gray-400 transition hover:text-white focus-ring';
      increaseButton.dataset.change = '1';
      increaseButton.dataset.productId = product.id;
      increaseButton.setAttribute('aria-label', `Increase quantity of ${product.name}`);
      increaseButton.textContent = '+';

      quantityGroup.appendChild(decreaseButton);
      quantityGroup.appendChild(quantityLabel);
      quantityGroup.appendChild(increaseButton);

      const linePrice = document.createElement('span');
      linePrice.className = 'text-sm font-semibold text-white';
      linePrice.textContent = formatPrice(lineTotal, product.currency);

      controls.appendChild(quantityGroup);
      controls.appendChild(linePrice);

      info.appendChild(header);
      info.appendChild(controls);

      cartItem.appendChild(imageWrapper);
      cartItem.appendChild(info);

      fragment.appendChild(cartItem);
    });

    cartItemsContainer.appendChild(fragment);
  }

  cartSubtotalEl.textContent = formatPrice(subtotal, currency);
  cartCountEl.textContent = String(totalItems);
  cartCountEl.classList.toggle('hidden', totalItems === 0);
  updateCartButtonLabel(totalItems);
}
function handleQuickAdd(product, button) {
  addToCart(product.id, 1);
  if (!button.dataset.originalText) {
    button.dataset.originalText = button.textContent || '';
  }
  if (!button.dataset.originalClasses) {
    button.dataset.originalClasses = button.className;
  }
  button.textContent = 'Added!';
  button.classList.add('bg-white', 'text-brand', 'ring-2', 'ring-brand/40');
  button.classList.remove('bg-brand');

  const previousTimeout = quickAddTimeouts.get(button);
  if (previousTimeout) {
    clearTimeout(previousTimeout);
  }
  const timeout = setTimeout(() => {
    button.textContent = button.dataset.originalText;
    button.className = button.dataset.originalClasses;
    quickAddTimeouts.delete(button);
  }, 1500);
  quickAddTimeouts.set(button, timeout);
}

function addToCart(productId, quantity = 1) {
  const product = getProduct(productId);
  if (!product) return;
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  saveCart(cart);
  scheduleCartRender();
  announce(`${product.name} added to cart`);
}

function changeQuantity(productId, delta) {
  const product = getProduct(productId);
  if (!product) return;
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    const index = cart.findIndex((cartItem) => cartItem.id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    announce(`${product.name} removed from cart`);
  } else {
    announce(`${product.name} quantity updated to ${item.quantity}`);
  }
  saveCart(cart);
  scheduleCartRender();
}

function removeFromCart(productId) {
  const product = getProduct(productId);
  const index = cart.findIndex((cartItem) => cartItem.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    saveCart(cart);
    scheduleCartRender();
    if (product) {
      announce(`${product.name} removed from cart`);
    }
  }
}

function handleCardKeydown(event, product, element) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    element.focus({ preventScroll: true });
    openProductModal(product.id);
  }
}

function createProductCard(product, { compact = false } = {}) {
  const card = document.createElement('article');
  card.className = `group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#161616] transition duration-300 hover:-translate-y-1 hover:border-brand/80 hover:ring-2 hover:ring-brand/50 ${
    compact ? 'p-5' : 'p-6'
  }`;
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `View ${product.name}`);
  card.classList.add('focus-ring');

  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'relative overflow-hidden rounded-2xl bg-black/40';
  const image = document.createElement('img');
  applyImageSources(image, product.image, '(min-width: 1280px) 280px, (min-width: 768px) 45vw, 100vw');
  image.loading = 'lazy';
  image.decoding = 'async';
  image.className = 'h-48 w-full object-cover transition duration-500 group-hover:scale-105';
  imageWrapper.appendChild(image);

  const badgeRow = document.createElement('div');
  badgeRow.className = 'absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gray-300';
  const brand = document.createElement('span');
  brand.textContent = product.brand;
  const category = document.createElement('span');
  category.textContent = product.category;
  badgeRow.appendChild(brand);
  badgeRow.appendChild(category);
  imageWrapper.appendChild(badgeRow);

  const body = document.createElement('div');
  body.className = 'mt-6 flex flex-1 flex-col gap-3';

  const title = document.createElement('h3');
  title.className = 'text-lg font-semibold text-white';
  title.textContent = product.name;

  const summary = document.createElement('p');
  summary.className = 'text-sm text-gray-400';
  summary.textContent = `${product.description.slice(0, 85)}${product.description.length > 85 ? '…' : ''}`;

  const footer = document.createElement('div');
  footer.className = 'mt-auto flex items-center justify-between';
  const price = createPriceDisplay(product, { size: 'lg' });

  const quickAdd = document.createElement('button');
  quickAdd.type = 'button';
  quickAdd.className = 'quick-add-button rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:brightness-110 focus-ring';
  quickAdd.dataset.productId = product.id;
  quickAdd.textContent = 'Quick Add';

  quickAdd.addEventListener('click', (event) => {
    event.stopPropagation();
    handleQuickAdd(product, quickAdd);
  });

  footer.appendChild(price);
  footer.appendChild(quickAdd);

  body.appendChild(title);
  body.appendChild(summary);
  body.appendChild(footer);

  card.appendChild(imageWrapper);
  card.appendChild(body);

  card.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.closest('button')) {
      return;
    }
    card.focus({ preventScroll: true });
    openProductModal(product.id);
  });

  card.addEventListener('keydown', (event) => handleCardKeydown(event, product, card));

  return card;
}

function renderFeatured() {
  if (!featuredGrid) return;
  featuredGrid.textContent = '';
  const fragment = document.createDocumentFragment();
  featuredProductIds
    .map((id) => getProduct(id))
    .filter(Boolean)
    .forEach((product) => {
      fragment.appendChild(createProductCard(product, { compact: true }));
    });
  featuredGrid.appendChild(fragment);
}

function renderProducts() {
  if (!productGrid || !productEmptyState) return;
  productGrid.textContent = '';
  const filtered =
    state.activeFilter === 'All'
      ? products
      : products.filter((product) => product.category === state.activeFilter);
  if (filtered.length === 0) {
    productEmptyState.classList.remove('hidden');
    return;
  }
  productEmptyState.classList.add('hidden');
  const fragment = document.createDocumentFragment();
  filtered.forEach((product) => {
    fragment.appendChild(createProductCard(product));
  });
  productGrid.appendChild(fragment);
}

function renderDeals() {
  if (!dealGrid) return;
  dealGrid.textContent = '';
  const deals = products.filter((product) => product.tags.includes('deal')).slice(0, 3);
  const fragment = document.createDocumentFragment();
  deals.forEach((product) => {
    const card = document.createElement('article');
    card.className =
      'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand/30 bg-[#161616] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand hover:ring-2 hover:ring-brand/60 focus-ring';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${product.name}`);

    const header = document.createElement('div');
    header.className = 'flex items-center justify-between';
    const badge = document.createElement('span');
    badge.className = 'rounded-full bg-brand/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand';
    badge.textContent = 'Deal';
    const savings = document.createElement('span');
    savings.className = 'text-xs text-brand/80';
    const hasCompare = typeof product.compareAt === 'number' && product.compareAt > product.price;
    savings.textContent = hasCompare
      ? `Save ${formatPrice(product.compareAt - product.price, product.currency)}`
      : 'Limited offer';
    header.appendChild(badge);
    header.appendChild(savings);

    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'mt-6 overflow-hidden rounded-2xl bg-black/40';
    const image = document.createElement('img');
    applyImageSources(image, product.image, '(min-width: 1024px) 300px, 100vw');
    image.loading = 'lazy';
    image.decoding = 'async';
    image.className = 'h-40 w-full object-cover transition duration-500 group-hover:scale-105';
    imageWrapper.appendChild(image);

    const title = document.createElement('h3');
    title.className = 'mt-6 text-lg font-semibold text-white';
    title.textContent = product.name;

    const brand = document.createElement('p');
    brand.className = 'text-sm text-gray-400';
    brand.textContent = product.brand;

    const footer = document.createElement('div');
    footer.className = 'mt-4 flex items-center justify-between';
    const price = createPriceDisplay(product, { size: 'lg' });

    const quickAdd = document.createElement('button');
    quickAdd.type = 'button';
    quickAdd.className = 'rounded-full border border-brand/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand transition hover:bg-brand hover:text-white focus-ring';
    quickAdd.dataset.productId = product.id;
    quickAdd.textContent = 'Quick Add';
    quickAdd.addEventListener('click', (event) => {
      event.stopPropagation();
      handleQuickAdd(product, quickAdd);
    });

    footer.appendChild(price);
    footer.appendChild(quickAdd);

    card.appendChild(header);
    card.appendChild(imageWrapper);
    card.appendChild(title);
    card.appendChild(brand);
    card.appendChild(footer);

    card.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement && event.target.closest('button')) {
        return;
      }
      card.focus({ preventScroll: true });
      openProductModal(product.id);
    });
    card.addEventListener('keydown', (event) => handleCardKeydown(event, product, card));

    fragment.appendChild(card);
  });

  dealGrid.appendChild(fragment);
}

function setFilter(category) {
  if (state.activeFilter === category) return;
  state.activeFilter = category;
  updateFilterTabs();
  renderProducts();
}

function updateFilterTabs() {
  filterTabs.forEach((tab) => {
    const isActive = tab.dataset.category === state.activeFilter;
    tab.classList.toggle('bg-brand/10', isActive);
    tab.classList.toggle('border-brand', isActive);
    tab.classList.toggle('text-white', isActive);
    tab.classList.toggle('bg-white/5', !isActive);
    tab.classList.toggle('border-white/10', !isActive);
    tab.classList.toggle('text-gray-300', !isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });

  navFilterLinks.forEach((link) => {
    const isActive = link.dataset.navFilter === state.activeFilter;
    if (isActive) {
      link.setAttribute('aria-current', 'true');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}
function renderModalOptions(product) {
  if (!modalOptions) return;
  modalOptions.textContent = '';
  const hasOptions = Array.isArray(product.options) && product.options.length > 0;
  const options = hasOptions ? product.options : ['Standard'];
  modalOptions.disabled = !hasOptions;
  if (!hasOptions) {
    modalOptions.setAttribute('aria-disabled', 'true');
  } else {
    modalOptions.removeAttribute('aria-disabled');
  }
  options.forEach((option) => {
    const optionEl = document.createElement('option');
    optionEl.value = option;
    optionEl.textContent = option;
    modalOptions.appendChild(optionEl);
  });
}

function selectModalImage(index) {
  const image = modalGalleryImages[index];
  if (!image || !modalPrimaryImage) return;
  applyImageSources(modalPrimaryImage, image, '(min-width: 1024px) 480px, 100vw');
  modalPrimaryImage.loading = 'lazy';
  modalPrimaryImage.decoding = 'async';
  modalPrimaryImage.alt = image.alt;
  const buttons = modalGallery ? Array.from(modalGallery.querySelectorAll('button')) : [];
  buttons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle('border-brand', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function renderModalGallery(product) {
  if (!modalGallery) return;
  modalGallery.textContent = '';
  modalGalleryImages = [product.image, ...product.gallery];
  const fragment = document.createDocumentFragment();
  modalGalleryImages.forEach((image, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'overflow-hidden rounded-xl border border-white/10 bg-black/40 transition hover:border-brand focus-ring';
    button.setAttribute('aria-label', `View ${product.name} image ${index + 1}`);
    button.setAttribute('aria-pressed', String(index === 0));
    const thumb = document.createElement('img');
    applyImageSources(thumb, image, '(min-width: 1024px) 160px, 30vw');
    thumb.loading = 'lazy';
    thumb.decoding = 'async';
    thumb.className = 'h-20 w-full object-cover sm:h-24';
    button.appendChild(thumb);
    button.addEventListener('click', () => selectModalImage(index));
    fragment.appendChild(button);
  });
  modalGallery.appendChild(fragment);
  selectModalImage(0);
}

function openProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;
  state.activeProduct = product;
  state.modalQuantity = 1;
  if (modalProductBrand) modalProductBrand.textContent = product.brand;
  if (modalProductName) modalProductName.textContent = product.name;
  if (modalProductDescription) modalProductDescription.textContent = product.description;
  if (modalAddToCartButton) {
    modalAddToCartButton.setAttribute('aria-label', `Add ${product.name} to cart`);
  }
  if (modalProductPrice) {
    modalProductPrice.textContent = '';
    modalProductPrice.appendChild(createPriceDisplay(product, { size: 'xl' }));
  }
  renderModalOptions(product);
  renderModalGallery(product);
  if (modalQuantityDisplay) {
    modalQuantityDisplay.textContent = '1';
  }
  openDialog(productModal);
}

function closeProductModal() {
  state.activeProduct = null;
  closeDialog(productModal);
}

function updateModalQuantity(delta) {
  const newQuantity = Math.max(1, state.modalQuantity + delta);
  state.modalQuantity = newQuantity;
  if (modalQuantityDisplay) {
    modalQuantityDisplay.textContent = String(newQuantity);
  }
}

function setSearchMessage(message) {
  if (!searchResults) return;
  searchResults.textContent = '';
  const messageEl = document.createElement('p');
  messageEl.className = 'text-sm text-gray-500';
  messageEl.textContent = message;
  searchResults.appendChild(messageEl);
}

function renderSearchResults(term) {
  if (!searchResults) return;
  const query = term.trim();
  if (!query) {
    setSearchMessage('Start typing to explore our elite lineup.');
    return;
  }

  const matches = products
    .map((product) => ({ product, score: scoreProduct(product, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => (b.score === a.score ? a.product.name.localeCompare(b.product.name) : b.score - a.score))
    .slice(0, 6);

  if (matches.length === 0) {
    setSearchMessage('No matches found. Try a different term.');
    return;
  }

  searchResults.textContent = '';
  const fragment = document.createDocumentFragment();
  matches.forEach(({ product }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-left transition hover:border-brand hover:bg-black/60 focus-ring';
    button.setAttribute('role', 'listitem');
    button.dataset.productId = product.id;

    const wrapper = document.createElement('div');
    wrapper.className = 'flex items-center gap-4';

    const thumbWrapper = document.createElement('div');
    thumbWrapper.className = 'h-12 w-12 overflow-hidden rounded-xl bg-black/50';
    const thumb = document.createElement('img');
    applyImageSources(thumb, product.image, '(min-width: 640px) 48px, 48px');
    thumb.loading = 'lazy';
    thumb.decoding = 'async';
    thumb.className = 'h-full w-full object-cover';
    thumbWrapper.appendChild(thumb);

    const info = document.createElement('div');
    info.className = 'flex-1';
    const name = document.createElement('p');
    name.className = 'text-sm font-semibold text-white';
    name.innerHTML = highlightMatch(product.name, query);

    const meta = document.createElement('p');
    meta.className = 'text-xs text-gray-400';
    meta.innerHTML = `${highlightMatch(product.brand, query)} • ${highlightMatch(product.category, query)} • ${formatPrice(
      product.price,
      product.currency
    )}`;

    info.appendChild(name);
    info.appendChild(meta);

    const action = document.createElement('span');
    action.className = 'text-xs font-semibold uppercase tracking-[0.3em] text-brand';
    action.textContent = 'View';

    wrapper.appendChild(thumbWrapper);
    wrapper.appendChild(info);
    wrapper.appendChild(action);

    button.appendChild(wrapper);

    button.addEventListener('click', () => {
      closeSearch();
      setTimeout(() => openProductModal(product.id), 150);
    });

    fragment.appendChild(button);
  });

  searchResults.appendChild(fragment);
}

function openCart() {
  renderCart();
  openDialog(cartModal);
}

function closeCart() {
  closeDialog(cartModal);
}

function openSearch() {
  renderSearchResults(searchInput ? searchInput.value : '');
  openDialog(searchOverlay);
  if (searchInput) {
    setTimeout(() => {
      searchInput.select();
    }, 0);
  }
}

function closeSearch() {
  closeDialog(searchOverlay);
  if (searchInput) {
    searchInput.value = '';
  }
  renderSearchResults('');
}

function handleEscape(event) {
  if (event.key !== 'Escape') return;
  if (searchOverlay && !searchOverlay.classList.contains('hidden')) {
    closeSearch();
  } else if (productModal && !productModal.classList.contains('hidden')) {
    closeProductModal();
  } else if (cartModal && !cartModal.classList.contains('hidden')) {
    closeCart();
  }
}

function renderStructuredData() {
  const script = document.getElementById('product-jsonld');
  if (!script) return;
  const schema = products.map((product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    brand: { '@type': 'Brand', name: product.brand },
    category: product.category,
    image: [product.image.src, ...product.gallery.map((image) => image.src)],
    offers: {
      '@type': 'Offer',
      priceCurrency: product.currency,
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
    },
  }));
  script.textContent = JSON.stringify(schema, null, 2);
}
if (modalQuantityDecrease) {
  modalQuantityDecrease.addEventListener('click', () => updateModalQuantity(-1));
}

if (modalQuantityIncrease) {
  modalQuantityIncrease.addEventListener('click', () => updateModalQuantity(1));
}

if (modalAddToCartButton) {
  modalAddToCartButton.addEventListener('click', () => {
    if (!state.activeProduct) return;
    addToCart(state.activeProduct.id, state.modalQuantity);
    closeProductModal();
  });
}

if (closeProductButton) {
  closeProductButton.addEventListener('click', closeProductModal);
}

if (openCartButton) {
  openCartButton.addEventListener('click', openCart);
}

if (closeCartButton) {
  closeCartButton.addEventListener('click', closeCart);
}

if (openSearchButton) {
  openSearchButton.addEventListener('click', openSearch);
}

if (closeSearchButton) {
  closeSearchButton.addEventListener('click', closeSearch);
}

if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
      announce('Add items to your cart before checking out.');
      return;
    }
    cart.length = 0;
    saveCart(cart);
    scheduleCartRender();
    announce('Thank you for your order! Your elite setup is on the way.');
    closeCart();
  });
}

if (cartItemsContainer) {
  cartItemsContainer.addEventListener('click', (event) => {
    const target = event.target instanceof HTMLElement ? event.target : null;
    const quantityButton = target ? target.closest('button[data-change]') : null;
    if (quantityButton) {
      const productId = quantityButton.dataset.productId;
      const delta = Number.parseInt(quantityButton.dataset.change || '0', 10);
      if (productId && Number.isFinite(delta)) {
        changeQuantity(productId, delta);
      }
    }
    const removeButton = target ? target.closest('button[data-remove-id]') : null;
    if (removeButton && removeButton.dataset.removeId) {
      removeFromCart(removeButton.dataset.removeId);
    }
  });
}

filterTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    if (tab.dataset.category) {
      setFilter(tab.dataset.category);
    }
  });
});

navFilterLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.dataset.navFilter) {
      setFilter(link.dataset.navFilter);
    }
  });
});

if (searchInput) {
  const debouncedSearch = debounce((value) => renderSearchResults(value), 150);
  searchInput.addEventListener('input', (event) => {
    debouncedSearch(event.target.value);
  });
}

document.addEventListener('keydown', handleEscape);

document.querySelectorAll('[data-overlay="search"]').forEach((overlay) => {
  overlay.addEventListener('click', closeSearch);
});

document.querySelectorAll('[data-overlay="cart"]').forEach((overlay) => {
  overlay.addEventListener('click', closeCart);
});

document.querySelectorAll('[data-overlay="product"]').forEach((overlay) => {
  overlay.addEventListener('click', closeProductModal);
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

renderFeatured();
renderProducts();
renderDeals();
updateFilterTabs();
renderCart();
renderSearchResults('');
renderStructuredData();
