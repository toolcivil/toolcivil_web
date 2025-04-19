// Steel pipe data with all specifications
export const steelPipeData = [
  { dn: '1/2 (15)', d: 21.7, t: [2.0, 2.0], w: [0.97, 1.24], a: [1.24, 1.58], i: [0.61, 1.26], z: [0.56, 0.93], rad: [0.70, 0.89] },
  { dn: '3/4 (20)', d: 27.2, t: [2.0, 2.3], w: [1.24, 1.41], a: [1.58, 1.80], i: [1.26, 1.41], z: [0.93, 1.03], rad: [0.89, 0.88] },
  { dn: '1 (25)', d: 34.0, t: [2.3], w: [1.80], a: [2.29], i: [2.89], z: [1.70], rad: [1.12] },
  { dn: '1 1/4 (32)', d: 42.7, t: [2.3, 2.5], w: [2.29, 2.48], a: [2.92, 3.16], i: [5.97, 6.40], z: [2.80, 3.00], rad: [1.43, 1.42] },
  { dn: '1 1/2 (40)', d: 48.6, t: [2.3, 2.5, 2.8], w: [2.63, 2.84, 3.16], a: [3.35, 3.62, 4.03], i: [8.99, 9.65, 10.60], z: [3.70, 3.97, 4.36], rad: [1.64, 1.63, 1.62] },
  { dn: '2 (50)', d: 60.5, t: [2.3, 3.2, 4.0], w: [3.30, 4.52, 5.57], a: [4.21, 5.76, 7.10], i: [17.80, 23.70, 28.50], z: [5.90, 7.84, 9.41], rad: [2.06, 2.03, 2.00] },
  { dn: '2 1/2 (65)', d: 76.3, t: [2.8, 3.2, 4.0], w: [5.08, 5.77, 7.13], a: [6.47, 7.35, 9.09], i: [43.70, 49.20, 59.50], z: [11.50, 12.90, 15.60], rad: [2.60, 2.59, 2.58] },
  { dn: '3 (80)', d: 89.1, t: [2.8, 3.2], w: [5.96, 6.78], a: [7.59, 8.64], i: [70.70, 79.80], z: [15.90, 17.90], rad: [3.05, 3.04] },
  { dn: '3 1/2 (90)', d: 101.6, t: [3.2, 4.0], w: [7.76, 9.63], a: [9.89, 12.26], i: [120.0, 146.0], z: [23.60, 28.80], rad: [3.48, 3.45] },
  { dn: '4 (100)', d: 114.3, t: [3.2, 3.5, 4.5], w: [8.77, 9.58, 12.20], a: [11.17, 12.18, 15.52], i: [172.0, 187.0, 234.0], z: [30.20, 32.70, 41.00], rad: [3.93, 3.92, 3.89] },
  { dn: '5 (125)', d: 139.8, t: [3.6, 4.0, 4.5, 6.0], w: [12.10, 13.40, 15.00, 19.80], a: [15.40, 17.07, 19.13, 25.22], i: [357.0, 394.0, 438.0, 566.0], z: [51.10, 56.30, 62.70, 80.20], rad: [4.82, 4.80, 4.79, 4.74] },
  { dn: '6 (150)', d: 165.2, t: [4.5, 5.0, 6.0, 7.1], w: [17.80, 19.80, 23.60, 27.70], a: [22.72, 25.16, 30.01, 35.26], i: [734.0, 808.0, 952.0, 1100.0], z: [88.90, 97.80, 115.0, 134.0], rad: [5.68, 5.67, 5.63, 5.60] },
  { dn: '8 (200)', d: 216.3, t: [4.5, 5.8, 7.0, 8.2], w: [23.50, 30.10, 36.10, 42.10], a: [29.94, 38.36, 46.03, 53.61], i: [1680.0, 2130.0, 2520.0, 2910.0], z: [155.0, 197.0, 233.0, 269.0], rad: [7.49, 7.45, 7.40, 7.36] }
];

// H-Beam data with all specifications
export const hBeamData = [
  { size: '100x100', weight: 17.2, h: 100, b: 100, t1: 6.0, t2: 8, r: 8, area: 21.90, ix: 383, iy: 134, zx: 77, zy: 27, rx: 4.2, ry: 2.47 },
  { size: '125x125', weight: 23.8, h: 125, b: 125, t1: 6.5, t2: 9, r: 10, area: 30.31, ix: 847, iy: 293, zx: 136, zy: 47, rx: 5.3, ry: 3.11 },
  { size: '150x75', weight: 14.0, h: 150, b: 75, t1: 5.0, t2: 7, r: 8, area: 17.85, ix: 666, iy: 50, zx: 89, zy: 13.4, rx: 6.1, ry: 1.66 },
  { size: '150x150', weight: 31.1, h: 150, b: 150, t1: 7.0, t2: 10, r: 11, area: 40.14, ix: 1640, iy: 563, zx: 219, zy: 75, rx: 6.4, ry: 3.75 },
  { size: '175x175', weight: 40.2, h: 175, b: 175, t1: 7.5, t2: 11, r: 12, area: 51.21, ix: 2880, iy: 984, zx: 330, zy: 112, rx: 7.5, ry: 4.38 },
  { size: '200x100', weight: 21.3, h: 200, b: 100, t1: 5.5, t2: 8, r: 11, area: 27.16, ix: 1840, iy: 134, zx: 184, zy: 27, rx: 8.2, ry: 2.22 },
  { size: '200x200', weight: 49.9, h: 200, b: 200, t1: 8.0, t2: 12, r: 13, area: 63.53, ix: 4720, iy: 1600, zx: 472, zy: 160, rx: 8.6, ry: 5.02 },
  { size: '250x125', weight: 29.6, h: 250, b: 125, t1: 6.0, t2: 9, r: 12, area: 37.66, ix: 4050, iy: 294, zx: 324, zy: 47, rx: 10.4, ry: 2.79 },
  { size: '250x250', weight: 72.4, h: 250, b: 250, t1: 9.0, t2: 14, r: 16, area: 92.18, ix: 10800, iy: 3650, zx: 867, zy: 292, rx: 10.8, ry: 6.29 },
  { size: '300x150', weight: 36.7, h: 300, b: 150, t1: 6.5, t2: 9, r: 13, area: 46.78, ix: 7210, iy: 508, zx: 481, zy: 68, rx: 12.4, ry: 3.29 },
  { size: '300x300', weight: 94.0, h: 300, b: 300, t1: 10.0, t2: 15, r: 18, area: 119.80, ix: 20400, iy: 6750, zx: 1360, zy: 450, rx: 13.1, ry: 7.51 },
  { size: '350x175', weight: 49.6, h: 350, b: 175, t1: 7.0, t2: 11, r: 14, area: 63.14, ix: 13600, iy: 984, zx: 775, zy: 112, rx: 14.7, ry: 3.95 },
  { size: '350x350', weight: 137.0, h: 350, b: 350, t1: 12.0, t2: 19, r: 20, area: 173.90, ix: 40300, iy: 13600, zx: 2300, zy: 776, rx: 15.2, ry: 8.84 },
  { size: '400x200', weight: 66.0, h: 400, b: 200, t1: 8.0, t2: 13, r: 16, area: 84.12, ix: 23700, iy: 1740, zx: 1190, zy: 174, rx: 16.8, ry: 4.54 },
  { size: '400x400', weight: 172.0, h: 400, b: 400, t1: 13.0, t2: 21, r: 22, area: 218.70, ix: 66600, iy: 22400, zx: 3330, zy: 1120, rx: 17.5, ry: 10.10 }
];

// I-Beam data with all specifications
export const iBeamData = [
  { size: '100x75', h: 100, b: 75, t1: 5.0, t2: 8.0, r1: 7, r2: 3.5, area: 16.43, weight: 12.9, ix: 281, iy: 47.3, rx: 4.14, ry: 1.70, zx: 56.2, zy: 12.6 },
  { size: '125x75', h: 125, b: 75, t1: 5.5, t2: 9.5, r1: 9, r2: 4.5, area: 20.45, weight: 16.1, ix: 538, iy: 57.5, rx: 5.13, ry: 1.68, zx: 86.0, zy: 15.3 },
  { size: '150x75', h: 150, b: 75, t1: 5.5, t2: 9.5, r1: 9, r2: 4.5, area: 21.83, weight: 17.1, ix: 819, iy: 57.5, rx: 6.12, ry: 1.62, zx: 109, zy: 15.3 },
  { size: '150x125', h: 150, b: 125, t1: 8.5, t2: 14.0, r1: 13, r2: 6.5, area: 46.15, weight: 36.2, ix: 1760, iy: 385, rx: 6.18, ry: 2.89, zx: 235, zy: 61.6 },
  { size: '180x100', h: 180, b: 100, t1: 6.0, t2: 10.0, r1: 10, r2: 5.0, area: 30.06, weight: 23.6, ix: 1670, iy: 138, rx: 7.45, ry: 2.14, zx: 186, zy: 27.5 },
  { size: '200x100', h: 200, b: 100, t1: 7.0, t2: 10.0, r1: 10, r2: 5.0, area: 33.06, weight: 26.0, ix: 2170, iy: 138, rx: 8.11, ry: 2.05, zx: 217, zy: 27.7 },
  { size: '200x150', h: 200, b: 150, t1: 9.0, t2: 16.0, r1: 15, r2: 7.5, area: 64.16, weight: 50.4, ix: 4460, iy: 753, rx: 8.34, ry: 3.43, zx: 446, zy: 100.0 },
  { 
    size: '250x125',
    variants: [
      { t1: 7.5, t2: 12.5, r1: 12, r2: 6.0, area: 48.79, weight: 38.3, ix: 5180, iy: 337, rx: 10.30, ry: 2.63, zx: 414, zy: 53.9 },
      { t1: 10.0, t2: 19.0, r1: 21, r2: 10.5, area: 70.73, weight: 55.5, ix: 7310, iy: 538, rx: 10.20, ry: 2.76, zx: 585, zy: 86.0 }
    ]
  },
  { 
    size: '300x150',
    variants: [
      { t1: 8.0, t2: 13.0, r1: 12, r2: 6.0, area: 61.58, weight: 48.3, ix: 9480, iy: 588, rx: 12.40, ry: 3.09, zx: 632, zy: 78.4 },
      { t1: 10.0, t2: 18.5, r1: 19, r2: 9.5, area: 83.47, weight: 65.5, ix: 12700, iy: 886, rx: 12.30, ry: 3.26, zx: 849, zy: 118.0 },
      { t1: 11.5, t2: 22.0, r1: 23, r2: 11.5, area: 97.88, weight: 76.8, ix: 14700, iy: 1080, rx: 12.20, ry: 3.32, zx: 978, zy: 143.0 }
    ]
  },
  { 
    size: '350x150',
    variants: [
      { t1: 9.0, t2: 15.0, r1: 13, r2: 6.5, area: 74.58, weight: 58.5, ix: 15200, iy: 702, rx: 14.30, ry: 3.07, zx: 870, zy: 93.5 },
      { t1: 12.0, t2: 24.0, r1: 25, r2: 12.5, area: 111.1, weight: 87.2, ix: 22400, iy: 1180, rx: 14.20, ry: 3.26, zx: 1280, zy: 158.0 }
    ]
  },
  { 
    size: '400x150',
    variants: [
      { t1: 10.0, t2: 18.0, r1: 17, r2: 8.5, area: 91.73, weight: 72.0, ix: 24100, iy: 864, rx: 16.20, ry: 3.07, zx: 1200, zy: 115.0 },
      { t1: 12.5, t2: 25.0, r1: 27, r2: 13.5, area: 122.1, weight: 95.8, ix: 31700, iy: 1240, rx: 16.10, ry: 3.18, zx: 1580, zy: 165.0 }
    ]
  },
  { 
    size: '450x175',
    variants: [
      { t1: 11.0, t2: 20.0, r1: 19, r2: 9.5, area: 116.8, weight: 91.7, ix: 39200, iy: 1510, rx: 18.30, ry: 3.60, zx: 1740, zy: 173.0 },
      { t1: 13.0, t2: 26.0, r1: 27, r2: 13.5, area: 146.1, weight: 115.0, ix: 48800, iy: 2020, rx: 18.30, ry: 3.72, zx: 2170, zy: 231.0 }
    ]
  },
  { 
    size: '600x190',
    variants: [
      { t1: 13.0, t2: 25.0, r1: 25, r2: 12.5, area: 169.4, weight: 133.0, ix: 98400, iy: 2460, rx: 24.10, ry: 3.81, zx: 3280, zy: 259.0 },
      { t1: 16.0, t2: 35.0, r1: 38, r2: 19.0, area: 224.5, weight: 176.0, ix: 130000, iy: 3540, rx: 24.10, ry: 3.97, zx: 4330, zy: 373.0 }
    ]
  }
];

// Channel data with all specifications (TIS/JIS Standards)
export const channelData = [
  { size: '75x40', t1: 5.0, t2: 7.0, r1: 8, r2: 4.0, area: 8.818, weight: 6.92, ix: 75.3, iy: 12.2, rx: 2.92, ry: 1.17, zx: 20.1, zy: 4.47 },
  { size: '100x50', t1: 5.0, t2: 7.5, r1: 8, r2: 4.0, area: 11.92, weight: 9.36, ix: 188, iy: 26.0, rx: 3.97, ry: 1.48, zx: 37.6, zy: 7.52 },
  { size: '125x65', t1: 6.0, t2: 8.0, r1: 8, r2: 4.0, area: 17.11, weight: 13.40, ix: 424, iy: 61.8, rx: 4.98, ry: 1.90, zx: 67.8, zy: 13.40 },
  { size: '150x75', t1: 6.5, t2: 10.0, r1: 10, r2: 5.0, area: 23.71, weight: 18.60, ix: 861, iy: 117.0, rx: 6.03, ry: 2.22, zx: 115.0, zy: 22.40 },
  { size: '150x75', t1: 9.0, t2: 12.5, r1: 15, r2: 7.5, area: 30.59, weight: 24.00, ix: 1050, iy: 147.0, rx: 5.86, ry: 2.19, zx: 140.0, zy: 28.30 },
  { size: '180x75', t1: 7.0, t2: 10.5, r1: 11, r2: 5.5, area: 27.20, weight: 21.40, ix: 1380, iy: 131.0, rx: 7.12, ry: 2.19, zx: 15.3, zy: 24.30 },
  { size: '200x80', t1: 7.5, t2: 11.0, r1: 12, r2: 6.0, area: 31.33, weight: 24.60, ix: 1950, iy: 168.0, rx: 7.88, ry: 2.32, zx: 195.0, zy: 29.10 },
  { size: '200x90', t1: 8.0, t2: 13.5, r1: 14, r2: 7.0, area: 38.65, weight: 30.30, ix: 2490, iy: 277.0, rx: 8.02, ry: 2.68, zx: 249.0, zy: 44.20 },
  { size: '250x90', t1: 9.0, t2: 13.0, r1: 14, r2: 7.0, area: 44.07, weight: 34.60, ix: 4180, iy: 294.0, rx: 9.74, ry: 2.58, zx: 334.0, zy: 44.50 },
  { size: '250x90', t1: 11.0, t2: 14.5, r1: 17, r2: 8.5, area: 51.17, weight: 40.20, ix: 4680, iy: 329.0, rx: 9.56, ry: 2.54, zx: 374.0, zy: 49.90 },
  { size: '300x90', t1: 9.0, t2: 13.0, r1: 14, r2: 7.0, area: 48.57, weight: 38.10, ix: 6440, iy: 309.0, rx: 11.50, ry: 2.52, zx: 429.0, zy: 45.70 },
  { size: '300x90', t1: 10.0, t2: 15.5, r1: 19, r2: 9.5, area: 55.74, weight: 43.80, ix: 7410, iy: 360.0, rx: 11.50, ry: 2.54, zx: 494.0, zy: 54.10 },
  { size: '380x100', t1: 12.0, t2: 16.0, r1: 19, r2: 9.5, area: 61.90, weight: 48.60, ix: 7870, iy: 379.0, rx: 11.30, ry: 2.48, zx: 525.0, zy: 56.40 },
  { size: '380x100', t1: 10.5, t2: 16.0, r1: 18, r2: 9.0, area: 63.39, weight: 54.50, ix: 14500, iy: 535.0, rx: 14.50, ry: 2.78, zx: 763.0, zy: 70.50 },
  { size: '380x100', t1: 13.0, t2: 16.5, r1: 18, r2: 9.0, area: 78.96, weight: 62.00, ix: 15600, iy: 565.0, rx: 14.10, ry: 2.67, zx: 823.0, zy: 73.60 },
  { size: '380x100', t1: 13.0, t2: 20.0, r1: 24, r2: 12.0, area: 85.71, weight: 67.30, ix: 17600, iy: 655.0, rx: 14.30, ry: 2.76, zx: 926.0, zy: 87.80 }
];

// Light Lip Channel data with all specifications
export const lipChannelData = [
  { size: '250x75x25', t: 4.5, area: 18.92, weight: 14.90, cx: 0, cy: 2.07, ix: 1690, iy: 129, rx: 9.44, ry: 2.62, zx: 135, zy: 23.8, sx: 5.1, sy: 0 },
  { size: '200x75x25', variants: [
    { t: 4.5, area: 16.67, weight: 13.10, cx: 0, cy: 2.32, ix: 990, iy: 121, rx: 7.61, ry: 2.69, zx: 99.0, zy: 23.3, sx: 5.6, sy: 0 },
    { t: 4.0, area: 14.95, weight: 11.70, cx: 0, cy: 2.32, ix: 895, iy: 110, rx: 7.74, ry: 2.72, zx: 89.5, zy: 21.3, sx: 5.7, sy: 0 },
    { t: 3.2, area: 12.13, weight: 9.52, cx: 0, cy: 2.33, ix: 736, iy: 92.3, rx: 7.70, ry: 2.76, zx: 73.6, zy: 17.8, sx: 5.7, sy: 0 }
  ]},
  { size: '200x75x20', variants: [
    { t: 4.5, area: 16.22, weight: 12.70, cx: 0, cy: 2.19, ix: 963, iy: 109, rx: 7.71, ry: 2.60, zx: 96.3, zy: 20.6, sx: 5.7, sy: 0 },
    { t: 4.0, area: 14.55, weight: 11.40, cx: 0, cy: 2.19, ix: 871, iy: 100, rx: 7.74, ry: 2.62, zx: 87.1, zy: 18.9, sx: 5.3, sy: 0 },
    { t: 3.2, area: 11.81, weight: 9.27, cx: 0, cy: 2.19, ix: 716, iy: 84.1, rx: 7.79, ry: 2.67, zx: 71.6, zy: 15.8, sx: 5.3, sy: 0 }
  ]},
  { size: '150x75x25', variants: [
    { t: 4.5, area: 14.42, weight: 11.30, cx: 0, cy: 2.65, ix: 501, iy: 109, rx: 5.90, ry: 2.75, zx: 66.9, zy: 22.5, sx: 5.4, sy: 0 },
    { t: 4.0, area: 12.95, weight: 10.20, cx: 0, cy: 2.65, ix: 455, iy: 99.8, rx: 5.93, ry: 2.78, zx: 60.6, zy: 20.6, sx: 6.3, sy: 0 },
    { t: 3.2, area: 10.53, weight: 8.27, cx: 0, cy: 2.66, ix: 375, iy: 83.6, rx: 5.97, ry: 2.82, zx: 50.0, zy: 17.3, sx: 6.3, sy: 0 }
  ]},
  { size: '150x75x20', variants: [
    { t: 4.5, area: 13.97, weight: 11.00, cx: 0, cy: 2.50, ix: 489, iy: 99.2, rx: 5.92, ry: 2.66, zx: 65.2, zy: 19.8, sx: 6.4, sy: 0 },
    { t: 4.0, area: 12.55, weight: 9.86, cx: 0, cy: 2.51, ix: 445, iy: 91.0, rx: 5.95, ry: 2.69, zx: 59.3, zy: 18.2, sx: 6.0, sy: 0 }
  ]},
  { size: '150x65x20', variants: [
    { t: 3.2, area: 10.21, weight: 8.01, cx: 0, cy: 2.51, ix: 366, iy: 76.4, rx: 5.99, ry: 2.74, zx: 48.9, zy: 15.3, sx: 5.8, sy: 0 },
    { t: 4.0, area: 11.75, weight: 9.22, cx: 0, cy: 2.11, ix: 401, iy: 63.7, rx: 5.48, ry: 2.33, zx: 53.5, zy: 14.5, sx: 5.1, sy: 0 },
    { t: 3.2, area: 9.567, weight: 7.51, cx: 0, cy: 2.11, ix: 332, iy: 53.8, rx: 5.89, ry: 2.37, zx: 44.3, zy: 12.2, sx: 5.0, sy: 0 },
    { t: 2.3, area: 7.012, weight: 5.50, cx: 0, cy: 2.12, ix: 248, iy: 41.1, rx: 5.94, ry: 2.42, zx: 33.0, zy: 9.37, sx: 5.1, sy: 0 }
  ]},
  { size: '150x50x20', variants: [
    { t: 4.5, area: 11.72, weight: 9.20, cx: 0, cy: 1.54, ix: 368, iy: 35.7, rx: 5.60, ry: 1.75, zx: 49.0, zy: 10.5, sx: 5.2, sy: 0 },
    { t: 3.2, area: 8.607, weight: 6.76, cx: 0, cy: 1.54, ix: 280, iy: 28.3, rx: 5.71, ry: 1.81, zx: 37.4, zy: 8.19, sx: 3.7, sy: 0 },
    { t: 2.3, area: 6.322, weight: 4.96, cx: 0, cy: 1.55, ix: 210, iy: 21.9, rx: 5.77, ry: 1.86, zx: 28.0, zy: 6.33, sx: 3.8, sy: 0 }
  ]},
  { size: '125x50x20', variants: [
    { t: 4.5, area: 10.59, weight: 8.32, cx: 0, cy: 1.68, ix: 238, iy: 33.5, rx: 4.74, ry: 1.78, zx: 38.0, zy: 10.0, sx: 4.0, sy: 0 },
    { t: 4.0, area: 9.548, weight: 7.50, cx: 0, cy: 1.68, ix: 217, iy: 33.1, rx: 4.77, ry: 1.81, zx: 34.7, zy: 9.38, sx: 4.0, sy: 0 },
    { t: 3.2, area: 7.807, weight: 6.13, cx: 0, cy: 1.68, ix: 181, iy: 26.6, rx: 4.82, ry: 1.85, zx: 29.0, zy: 8.02, sx: 4.0, sy: 0 },
    { t: 2.3, area: 5.747, weight: 4.51, cx: 0, cy: 1.69, ix: 137, iy: 20.6, rx: 4.88, ry: 1.89, zx: 21.9, zy: 6.22, sx: 4.1, sy: 0 }
  ]},
  { size: '120x60x25', variants: [
    { t: 4.5, area: 11.72, weight: 9.20, cx: 0, cy: 2.25, ix: 252, iy: 58.0, rx: 4.63, ry: 2.22, zx: 41.9, zy: 15.5, sx: 5.3, sy: 0 },
    { t: 3.2, area: 8.287, weight: 6.51, cx: 0, cy: 2.12, ix: 186, iy: 40.9, rx: 4.74, ry: 2.22, zx: 31.0, zy: 10.5, sx: 4.9, sy: 0 },
    { t: 2.3, area: 6.092, weight: 4.78, cx: 0, cy: 2.13, ix: 140, iy: 31.3, rx: 4.79, ry: 2.27, zx: 23.3, zy: 8.1, sx: 5.1, sy: 0 }
  ]},
  { size: '120x40x20', t: 3.2, area: 7.007, weight: 5.50, cx: 0, cy: 1.32, ix: 144, iy: 15.3, rx: 4.53, ry: 1.48, zx: 24.0, zy: 5.71, sx: 3.4, sy: 0 },
  { size: '100x50x20', variants: [
    { t: 4.5, area: 9.469, weight: 7.43, cx: 0, cy: 1.86, ix: 139, iy: 30.9, rx: 3.82, ry: 1.81, zx: 27.7, zy: 9.82, sx: 4.3, sy: 0 },
    { t: 4.0, area: 8.548, weight: 6.71, cx: 0, cy: 1.86, ix: 127, iy: 28.7, rx: 3.85, ry: 1.83, zx: 25.4, zy: 9.13, sx: 4.3, sy: 0 },
    { t: 3.2, area: 7.007, weight: 5.50, cx: 0, cy: 1.86, ix: 107, iy: 24.5, rx: 3.90, ry: 1.87, zx: 21.3, zy: 7.81, sx: 4.4, sy: 0 },
    { t: 2.8, area: 6.205, weight: 4.87, cx: 0, cy: 1.88, ix: 99.8, iy: 23.2, rx: 3.96, ry: 1.91, zx: 20.0, zy: 7.44, sx: 4.3, sy: 0 },
    { t: 2.3, area: 5.172, weight: 4.06, cx: 0, cy: 1.86, ix: 80.7, iy: 19.0, rx: 3.96, ry: 1.92, zx: 16.0, zy: 6.06, sx: 4.4, sy: 0 },
    { t: 2.0, area: 4.537, weight: 3.56, cx: 0, cy: 1.86, ix: 71.4, iy: 16.9, rx: 3.97, ry: 1.93, zx: 14.3, zy: 5.4, sx: 4.4, sy: 0 },
    { t: 1.6, area: 3.672, weight: 2.88, cx: 0, cy: 1.87, ix: 58.4, iy: 14.0, rx: 3.99, ry: 1.95, zx: 11.7, zy: 4.47, sx: 4.5, sy: 0 }
  ]},
  { size: '90x45x15', variants: [
    { t: 3.2, area: 6.367, weight: 5.00, cx: 0, cy: 1.72, ix: 76.9, iy: 18.3, rx: 3.48, ry: 1.69, zx: 17.1, zy: 6.57, sx: 4.1, sy: 0 },
    { t: 2.3, area: 4.712, weight: 3.70, cx: 0, cy: 1.73, ix: 58.6, iy: 14.2, rx: 3.53, ry: 1.74, zx: 13.0, zy: 5.14, sx: 4.1, sy: 0 },
    { t: 1.6, area: 3.352, weight: 2.63, cx: 0, cy: 1.73, ix: 42.6, iy: 10.5, rx: 3.56, ry: 1.77, zx: 9.46, zy: 5.8, sx: 4.2, sy: 0 }
  ]},
  { size: '75x45x15', variants: [
    { t: 2.3, area: 4.137, weight: 3.25, cx: 0, cy: 1.72, ix: 37.1, iy: 11.8, rx: 3.00, ry: 1.69, zx: 9.90, zy: 4.24, sx: 4.0, sy: 0 },
    { t: 2.0, area: 3.637, weight: 2.86, cx: 0, cy: 1.72, ix: 33.0, iy: 10.5, rx: 3.01, ry: 1.70, zx: 8.79, zy: 3.76, sx: 4.0, sy: 0 },
    { t: 1.6, area: 2.952, weight: 2.32, cx: 0, cy: 1.72, ix: 27.1, iy: 8.71, rx: 3.03, ry: 1.72, zx: 7.24, zy: 3.13, sx: 4.1, sy: 0 }
  ]},
  { size: '75x35x15', t: 2.3, area: 3.677, weight: 2.89, cx: 0, cy: 1.29, ix: 31.0, iy: 6.58, rx: 2.91, ry: 1.34, zx: 8.28, zy: 2.98, sx: 3.1, sy: 0 },
  { size: '70x40x25', t: 1.6, area: 3.032, weight: 2.38, cx: 0, cy: 1.80, ix: 22.0, iy: 8.00, rx: 2.69, ry: 1.62, zx: 6.29, zy: 3.67, sx: 4.4, sy: 0 },
  { size: '60x30x10', variants: [
    { t: 2.3, area: 2.872, weight: 2.25, cx: 0, cy: 1.06, ix: 15.6, iy: 3.32, rx: 2.33, ry: 1.07, zx: 5.20, zy: 1.71, sx: 2.5, sy: 0 },
    { t: 2.0, area: 2.537, weight: 1.99, cx: 0, cy: 1.06, ix: 14.0, iy: 3.01, rx: 2.35, ry: 1.09, zx: 4.65, zy: 1.55, sx: 2.5, sy: 0 },
    { t: 1.6, area: 2.072, weight: 1.63, cx: 0, cy: 1.06, ix: 11.6, iy: 2.56, rx: 2.37, ry: 1.11, zx: 3.88, zy: 1.32, sx: 2.5, sy: 0 }
  ]}
];

// Flat Bar data with all specifications
export const flatBarData = [
  { thickness: 4.5, variants: [
    { width: 25, area: 1.125, weight: 0.88 },
    { width: 32, area: 1.44, weight: 1.13 },
    { width: 38, area: 1.71, weight: 1.34 },
    { width: 44, area: 1.98, weight: 1.55 },
    { width: 50, area: 2.25, weight: 1.77 }
  ]},
  { thickness: 6, variants: [
    { width: 25, area: 1.50, weight: 1.18 },
    { width: 32, area: 1.92, weight: 1.51 },
    { width: 38, area: 2.28, weight: 1.79 },
    { width: 44, area: 2.64, weight: 2.07 },
    { width: 50, area: 3.00, weight: 2.36 },
    { width: 65, area: 3.90, weight: 3.06 },
    { width: 75, area: 4.50, weight: 3.53 },
    { width: 90, area: 5.40, weight: 4.24 },
    { width: 100, area: 6.00, weight: 4.71 },
    { width: 125, area: 7.50, weight: 5.89 }
  ]},
  { thickness: 8, variants: [
    { width: 25, area: 2.00, weight: 1.57 },
    { width: 32, area: 2.56, weight: 2.01 },
    { width: 38, area: 3.04, weight: 2.39 },
    { width: 44, area: 3.52, weight: 2.76 },
    { width: 50, area: 4.00, weight: 3.14 },
    { width: 65, area: 5.20, weight: 4.08 },
    { width: 75, area: 6.00, weight: 4.71 },
    { width: 90, area: 7.20, weight: 5.65 },
    { width: 100, area: 8.00, weight: 6.28 },
    { width: 125, area: 10.0, weight: 7.85 }
  ]},
  { thickness: 9, variants: [
    { width: 25, area: 2.25, weight: 1.77 },
    { width: 32, area: 2.88, weight: 2.26 },
    { width: 38, area: 3.42, weight: 2.68 },
    { width: 44, area: 3.96, weight: 3.11 },
    { width: 50, area: 4.50, weight: 3.53 },
    { width: 65, area: 5.85, weight: 4.59 },
    { width: 75, area: 6.75, weight: 5.30 },
    { width: 90, area: 8.10, weight: 6.36 },
    { width: 100, area: 9.00, weight: 7.06 },
    { width: 125, area: 11.25, weight: 8.83 },
    { width: 150, area: 13.5, weight: 10.6 },
    { width: 180, area: 16.2, weight: 12.7 },
    { width: 200, area: 18.0, weight: 14.1 },
    { width: 230, area: 20.7, weight: 16.2 },
    { width: 250, area: 22.5, weight: 17.7 }
  ]},
  { thickness: 12, variants: [
    { width: 25, area: 3.00, weight: 2.36 },
    { width: 32, area: 3.84, weight: 3.01 },
    { width: 38, area: 4.56, weight: 3.58 },
    { width: 44, area: 5.28, weight: 4.14 },
    { width: 50, area: 6.00, weight: 4.71 },
    { width: 65, area: 7.80, weight: 6.12 },
    { width: 75, area: 9.00, weight: 7.06 },
    { width: 90, area: 10.8, weight: 8.48 },
    { width: 100, area: 12.0, weight: 9.42 },
    { width: 125, area: 15.0, weight: 11.8 },
    { width: 150, area: 18.0, weight: 14.1 },
    { width: 180, area: 21.6, weight: 17.0 },
    { width: 200, area: 24.0, weight: 18.8 },
    { width: 230, area: 27.6, weight: 21.7 },
    { width: 250, area: 30.0, weight: 23.6 },
    { width: 280, area: 33.6, weight: 26.4 },
    { width: 300, area: 36.0, weight: 28.3 }
  ]},
  { thickness: 16, variants: [
    { width: 32, area: 5.12, weight: 4.02 },
    { width: 38, area: 6.08, weight: 4.77 },
    { width: 44, area: 7.04, weight: 5.53 },
    { width: 50, area: 8.00, weight: 6.28 },
    { width: 65, area: 10.4, weight: 8.16 },
    { width: 75, area: 12.0, weight: 9.42 },
    { width: 90, area: 14.4, weight: 11.3 },
    { width: 100, area: 16.0, weight: 12.6 },
    { width: 125, area: 20.0, weight: 15.7 },
    { width: 150, area: 24.0, weight: 18.8 },
    { width: 180, area: 28.8, weight: 22.6 },
    { width: 200, area: 32.0, weight: 25.1 },
    { width: 230, area: 36.8, weight: 28.9 },
    { width: 250, area: 40.0, weight: 31.4 },
    { width: 280, area: 44.8, weight: 35.2 }
  ]}
];

// Equal Angle data with all specifications (TIS/JIS Standards)
export const equalAngleData = [
  { size: '25x25', variants: [
    { t: 3, t1: 4.0, t2: 2.0, area: 1.427, weight: 1.12, cx: 0.719, cy: 0.719, ix: 0.797, iy: 0.797, maxIx: 1.26, minIy: 0.332, rx: 0.747, ry: 0.747, maxrx: 0.94, maxry: 0.483, zx: 0.448, zy: 0.448 }
  ]},
  { size: '30x30', variants: [
    { t: 3, t1: 4.0, t2: 2.0, area: 1.727, weight: 1.36, cx: 0.844, cy: 0.844, ix: 1.42, iy: 1.42, maxIx: 2.26, minIy: 0.59, rx: 0.908, ry: 0.908, maxrx: 1.14, maxry: 0.585, zx: 0.661, zy: 0.661 }
  ]},
  { size: '40x40', variants: [
    { t: 3, t1: 4.5, t2: 2.0, area: 2.336, weight: 1.83, cx: 1.09, cy: 1.09, ix: 3.53, iy: 3.53, maxIx: 5.60, minIy: 1.46, rx: 1.23, ry: 1.23, maxrx: 1.55, maxry: 0.790, zx: 1.21, zy: 1.21 },
    { t: 5, t1: 4.5, t2: 3.0, area: 3.755, weight: 2.95, cx: 1.17, cy: 1.17, ix: 5.42, iy: 5.42, maxIx: 8.59, minIy: 2.25, rx: 1.20, ry: 1.20, maxrx: 1.51, maxry: 0.774, zx: 1.91, zy: 1.91 },
    { t: 6, t1: 6.0, t2: 2.4, area: 4.48, weight: 3.52, cx: 1.20, cy: 1.20, ix: 6.31, iy: 6.31, maxIx: 9.98, minIy: 2.65, rx: 1.19, ry: 1.19, maxrx: 1.49, maxry: 0.770, zx: 2.26, zy: 2.26 }
  ]},
  { size: '45x45', variants: [
    { t: 4, t1: 6.5, t2: 3.0, area: 3.492, weight: 2.74, cx: 1.24, cy: 1.24, ix: 6.50, iy: 6.50, maxIx: 10.3, minIy: 2.70, rx: 1.36, ry: 1.36, maxrx: 1.72, maxry: 0.880, zx: 2.00, zy: 2.00 },
    { t: 5, t1: 6.5, t2: 3.0, area: 4.302, weight: 3.38, cx: 1.28, cy: 1.28, ix: 7.91, iy: 7.91, maxIx: 12.5, minIy: 3.29, rx: 1.36, ry: 1.36, maxrx: 1.71, maxry: 0.874, zx: 2.46, zy: 2.46 }
  ]},
  { size: '50x50', variants: [
    { t: 3, t1: 7.0, t2: 2.4, area: 2.96, weight: 2.33, cx: 1.31, cy: 1.31, ix: 6.86, iy: 6.86, maxIx: 10.8, minIy: 2.88, rx: 1.52, ry: 1.52, maxrx: 1.91, maxry: 0.990, zx: 1.86, zy: 1.86 },
    { t: 4, t1: 6.5, t2: 3.0, area: 3.892, weight: 3.06, cx: 1.37, cy: 1.37, ix: 9.06, iy: 9.06, maxIx: 14.4, minIy: 3.76, rx: 1.53, ry: 1.53, maxrx: 1.92, maxry: 0.983, zx: 2.49, zy: 2.49 },
    { t: 5, t1: 6.5, t2: 3.0, area: 4.802, weight: 3.77, cx: 1.41, cy: 1.41, ix: 11.1, iy: 11.1, maxIx: 17.5, minIy: 4.58, rx: 1.52, ry: 1.52, maxrx: 1.91, maxry: 0.976, zx: 3.08, zy: 3.08 },
    { t: 6, t1: 6.5, t2: 4.5, area: 5.644, weight: 4.43, cx: 1.44, cy: 1.44, ix: 12.6, iy: 12.6, maxIx: 20.0, minIy: 5.23, rx: 1.50, ry: 1.50, maxrx: 1.88, maxry: 0.963, zx: 3.55, zy: 3.55 }
  ]},
  { size: '60x60', variants: [
    { t: 4, t1: 6.6, t2: 3.0, area: 4.692, weight: 3.68, cx: 1.61, cy: 1.61, ix: 16.0, iy: 16.0, maxIx: 25.4, minIy: 6.62, rx: 1.85, ry: 1.85, maxrx: 2.33, maxry: 1.19, zx: 3.66, zy: 3.66 },
    { t: 5, t1: 6.5, t2: 3.0, area: 5.802, weight: 4.55, cx: 1.66, cy: 1.66, ix: 19.6, iy: 19.6, maxIx: 31.2, minIy: 8.09, rx: 1.84, ry: 1.84, maxrx: 2.32, maxry: 1.18, zx: 4.52, zy: 4.52 }
  ]},
  { size: '65x65', variants: [
    { t: 5, t1: 8.5, t2: 3.0, area: 6.367, weight: 5.00, cx: 1.77, cy: 1.77, ix: 25.3, iy: 25.3, maxIx: 40.1, minIy: 10.5, rx: 1.99, ry: 1.99, maxrx: 2.51, maxry: 1.28, zx: 5.35, zy: 5.35 },
    { t: 6, t1: 8.5, t2: 4.0, area: 7.527, weight: 5.91, cx: 1.81, cy: 1.81, ix: 29.4, iy: 29.4, maxIx: 46.6, minIy: 12.2, rx: 1.98, ry: 1.98, maxrx: 2.49, maxry: 1.27, zx: 6.26, zy: 6.26 },
    { t: 8, t1: 8.5, t2: 6.0, area: 9.761, weight: 7.66, cx: 1.88, cy: 1.88, ix: 36.8, iy: 36.8, maxIx: 58.3, minIy: 15.3, rx: 1.94, ry: 1.94, maxrx: 2.44, maxry: 1.25, zx: 7.96, zy: 7.96 }
  ]},
  { size: '70x70', variants: [
    { t: 6, t1: 8.5, t2: 4.0, area: 8.127, weight: 6.38, cx: 1.93, cy: 1.93, ix: 37.1, iy: 37.1, maxIx: 58.9, minIy: 15.3, rx: 2.14, ry: 2.14, maxrx: 2.69, maxry: 1.37, zx: 7.33, zy: 7.33 }
  ]},
  { size: '75x75', variants: [
    { t: 6, t1: 8.5, t2: 4.0, area: 8.727, weight: 6.85, cx: 2.06, cy: 2.06, ix: 46.1, iy: 46.1, maxIx: 73.2, minIy: 19.0, rx: 2.30, ry: 2.30, maxrx: 2.90, maxry: 1.48, zx: 8.47, zy: 8.47 },
    { t: 9, t1: 8.5, t2: 6.0, area: 12.69, weight: 9.96, cx: 2.17, cy: 2.17, ix: 64.4, iy: 64.4, maxIx: 102, minIy: 26.7, rx: 2.25, ry: 2.25, maxrx: 2.84, maxry: 1.45, zx: 12.1, zy: 12.1 },
    { t: 12, t1: 8.5, t2: 6.0, area: 16.56, weight: 13.00, cx: 2.29, cy: 2.29, ix: 81.9, iy: 81.9, maxIx: 129, minIy: 34.5, rx: 2.22, ry: 2.22, maxrx: 2.79, maxry: 1.44, zx: 15.7, zy: 15.7 }
  ]},
  { size: '80x80', variants: [
    { t: 6, t1: 8.5, t2: 4.0, area: 9.327, weight: 7.32, cx: 2.18, cy: 2.18, ix: 56.4, iy: 56.4, maxIx: 89.6, minIy: 23.2, rx: 2.46, ry: 2.46, maxrx: 3.10, maxry: 1.58, zx: 9.70, zy: 9.70 }
  ]},
  { size: '90x90', variants: [
    { t: 6, t1: 10.0, t2: 5.0, area: 10.55, weight: 8.28, cx: 2.42, cy: 2.42, ix: 80.7, iy: 80.7, maxIx: 128, minIy: 33.4, rx: 2.77, ry: 2.77, maxrx: 3.48, maxry: 1.78, zx: 12.3, zy: 12.3 },
    { t: 7, t1: 10.0, t2: 5.0, area: 12.22, weight: 9.59, cx: 2.46, cy: 2.46, ix: 93.0, iy: 93.0, maxIx: 148, minIy: 38.3, rx: 2.76, ry: 2.76, maxrx: 3.48, maxry: 1.77, zx: 14.2, zy: 14.2 },
    { t: 10, t1: 10.0, t2: 7.0, area: 17.00, weight: 13.3, cx: 2.57, cy: 2.57, ix: 125, iy: 125, maxIx: 199, minIy: 51.7, rx: 2.71, ry: 2.71, maxrx: 3.42, maxry: 1.74, zx: 19.5, zy: 19.5 },
    { t: 12, t1: 11.0, t2: 4.8, area: 20.30, weight: 15.9, cx: 2.66, cy: 2.66, ix: 148, iy: 148, maxIx: 234, minIy: 61.7, rx: 2.70, ry: 2.70, maxrx: 3.40, maxry: 1.75, zx: 23.3, zy: 23.3 },
    { t: 13, t1: 10.0, t2: 7.0, area: 21.71, weight: 17.0, cx: 2.69, cy: 2.69, ix: 156, iy: 156, maxIx: 248, minIy: 65.3, rx: 2.68, ry: 2.68, maxrx: 3.38, maxry: 1.73, zx: 24.8, zy: 24.8 }
  ]},
  { size: '100x100', variants: [
    { t: 7, t1: 10.0, t2: 5.0, area: 13.62, weight: 10.7, cx: 2.71, cy: 2.71, ix: 129, iy: 129, maxIx: 205, minIy: 53.2, rx: 3.08, ry: 3.08, maxrx: 3.88, maxry: 1.98, zx: 17.7, zy: 17.7 },
    { t: 10, t1: 10.0, t2: 7.0, area: 19.0, weight: 14.9, cx: 2.82, cy: 2.82, ix: 175, iy: 175, maxIx: 276, minIy: 72.0, rx: 3.04, ry: 3.04, maxrx: 3.83, maxry: 1.95, zx: 24.4, zy: 24.4 },
    { t: 12, t1: 12.0, t2: 4.8, area: 22.7, weight: 17.8, cx: 2.90, cy: 2.90, ix: 207, iy: 207, maxIx: 328, minIy: 85.7, rx: 3.02, ry: 3.02, maxrx: 3.80, maxry: 1.94, zx: 29.1, zy: 29.1 },
    { t: 13, t1: 10.0, t2: 7.0, area: 24.31, weight: 19.1, cx: 2.94, cy: 2.94, ix: 220, iy: 220, maxIx: 348, minIy: 91.1, rx: 3.00, ry: 3.00, maxrx: 3.78, maxry: 1.94, zx: 31.1, zy: 31.1 }
  ]},
  { size: '120x120', variants: [
    { t: 8, t1: 12.0, t2: 5.0, area: 18.76, weight: 14.7, cx: 3.24, cy: 3.24, ix: 258, iy: 258, maxIx: 410, minIy: 106, rx: 3.71, ry: 3.71, maxrx: 4.67, maxry: 2.38, zx: 29.5, zy: 29.5 },
    { t: 9, t1: 12.0, t2: 6.0, area: 22.74, weight: 17.9, cx: 3.53, cy: 3.53, ix: 366, iy: 366, maxIx: 583, minIy: 150, rx: 4.01, ry: 4.01, maxrx: 5.06, maxry: 2.57, zx: 38.7, zy: 38.7 }
  ]},
  { size: '130x130', variants: [
    { t: 12, t1: 12.0, t2: 8.5, area: 29.76, weight: 23.4, cx: 3.64, cy: 3.64, ix: 467, iy: 467, maxIx: 743, minIy: 192, rx: 3.96, ry: 3.96, maxrx: 5.00, maxry: 2.54, zx: 49.9, zy: 49.9 },
    { t: 15, t1: 12.0, t2: 8.5, area: 36.75, weight: 28.8, cx: 3.76, cy: 3.76, ix: 568, iy: 568, maxIx: 902, minIy: 234, rx: 3.93, ry: 3.93, maxrx: 4.95, maxry: 2.53, zx: 21.5, zy: 21.5 }
  ]},
  { size: '150x150', variants: [
    { t: 12, t1: 14.0, t2: 7.0, area: 34.77, weight: 27.3, cx: 4.14, cy: 4.14, ix: 740, iy: 740, maxIx: 1180, minIy: 304, rx: 4.16, ry: 4.16, maxrx: 5.82, maxry: 2.96, zx: 68.1, zy: 68.1 },
    { t: 15, t1: 14.0, t2: 10.0, area: 42.74, weight: 33.6, cx: 4.24, cy: 4.24, ix: 888, iy: 888, maxIx: 1410, minIy: 365, rx: 4.56, ry: 4.56, maxrx: 5.75, maxry: 2.92, zx: 82.6, zy: 82.6 },
    { t: 19, t1: 14.0, t2: 10.0, area: 53.38, weight: 41.9, cx: 4.40, cy: 4.40, ix: 1090, iy: 1090, maxIx: 1730, minIy: 451, rx: 4.52, ry: 4.52, maxrx: 5.69, maxry: 2.91, zx: 103, zy: 103 }
  ]},
  { size: '175x175', variants: [
    { t: 12, t1: 15.0, t2: 11.0, area: 40.52, weight: 31.8, cx: 4.73, cy: 4.73, ix: 1170, iy: 1170, maxIx: 1860, minIy: 480, rx: 5.38, ry: 5.38, maxrx: 6.78, maxry: 3.44, zx: 91.8, zy: 91.8 },
    { t: 15, t1: 15.0, t2: 11.0, area: 50.21, weight: 39.4, cx: 4.85, cy: 4.85, ix: 1440, iy: 1440, maxIx: 2290, minIy: 589, rx: 5.35, ry: 5.35, maxrx: 6.75, maxry: 3.42, zx: 114, zy: 114 }
  ]},
  { size: '200x200', variants: [
    { t: 15, t1: 17.0, t2: 12.0, area: 57.75, weight: 45.3, cx: 5.46, cy: 5.46, ix: 2180, iy: 2180, maxIx: 3470, minIy: 891, rx: 6.14, ry: 6.14, maxrx: 7.75, maxry: 3.93, zx: 150, zy: 150 },
    { t: 20, t1: 17.0, t2: 12.0, area: 76.00, weight: 59.7, cx: 5.67, cy: 5.67, ix: 2820, iy: 2820, maxIx: 4490, minIy: 1160, rx: 6.09, ry: 6.09, maxrx: 7.68, maxry: 3.90, zx: 197, zy: 197 },
    { t: 25, t1: 17.0, t2: 12.0, area: 93.75, weight: 73.6, cx: 5.86, cy: 5.86, ix: 3420, iy: 3420, maxIx: 5420, minIy: 1410, rx: 6.04, ry: 6.04, maxrx: 7.61, maxry: 3.88, zx: 242, zy: 242 }
  ]},
  { size: '250x250', variants: [
    { t: 25, t1: 24.0, t2: 12.0, area: 119.4, weight: 93.7, cx: 7.10, cy: 7.10, ix: 6950, iy: 6950, maxIx: 11000, minIy: 2860, rx: 7.63, ry: 7.63, maxrx: 9.62, maxry: 4.90, zx: 388, zy: 388 },
    { t: 35, t1: 24.0, t2: 18.0, area: 162.6, weight: 128, cx: 7.45, cy: 7.45, ix: 9110, iy: 9110, maxIx: 14400, minIy: 3790, rx: 7.49, ry: 7.49, maxrx: 9.42, maxry: 4.83, zx: 519, zy: 519 }
  ]}
];

// Square Bar data with all specifications
export const squareBarData = [
  // Inch sizes
  { size: '3/16" x 3/16"', weight: 0.18 },
  { size: '1/4" x 1/4"', weight: 0.32 },
  { size: '5/16" x 5/16"', weight: 0.50 },
  { size: '3/8" x 3/8"', weight: 0.72 },
  { size: '1/2" x 1/2"', weight: 1.27 },
  { size: '5/8" x 5/8"', weight: 2.00 },
  { size: '7/8" x 7/8"', weight: 2.83 },
  { size: '1" x 1"', weight: 3.88 },
  { size: '1-1/4" x 1-1/4"', weight: 7.92 },
  { size: '1-1/2" x 1-1/2"', weight: 11.39 },
  { size: '1-3/4" x 1-3/4"', weight: 15.50 },
  { size: '2" x 2"', weight: 20.25 },
  { size: '2-1/2" x 2-1/2"', weight: 31.67 },
  { size: '3" x 3"', weight: 45.67 },
  { size: '3-1/2" x 3-1/2"', weight: 62.17 },
  { size: '4" x 4"', weight: 81.00 },
  { size: '5" x 5"', weight: 126.67 },
  { size: '6" x 6"', weight: 182.33 },
  // Metric sizes (mm)
  { size: '5x5', weight: 0.20 },
  { size: '6x6', weight: 0.28 },
  { size: '8x8', weight: 0.50 },
  { size: '9x9', weight: 0.63 },
  { size: '12x12', weight: 1.13 },
  { size: '15x15', weight: 1.77 },
  { size: '19x19', weight: 2.83 },
  { size: '22x22', weight: 3.80 },
  { size: '25x25', weight: 4.92 },
  { size: '30x30', weight: 8.03 },
  { size: '38x38', weight: 11.33 },
  { size: '42x42', weight: 15.90 },
  { size: '50x50', weight: 19.63 },
  { size: '65x65', weight: 33.17 },
  { size: '75x75', weight: 44.17 },
  { size: '90x90', weight: 63.67 },
  { size: '100x100', weight: 78.50 },
  { size: '125x125', weight: 122.67 },
  { size: '150x150', weight: 176.67 }
];

// Square Tube data with all specifications
export const squareTubeData = [
  // 25x25 (1x1)
  { size: '25x25', t: 2.0, w: 1.36, a: 1.74, ix: 1.67, iy: 1.67, zx: 1.34, zy: 1.34, rx: 0.98, ry: 0.98 },
  { size: '25x25', t: 2.3, w: 1.53, a: 1.97, ix: 1.82, iy: 1.82, zx: 1.46, zy: 1.46, rx: 0.96, ry: 0.96 },
  { size: '25x25', t: 2.6, w: 1.65, a: 2.10, ix: 1.91, iy: 1.91, zx: 1.53, zy: 1.53, rx: 0.95, ry: 0.95 },
  { size: '25x25', t: 3.2, w: 1.91, a: 2.44, ix: 2.08, iy: 2.08, zx: 1.66, zy: 1.66, rx: 0.92, ry: 0.92 },

  // 32x32 (1¼x1¼)
  { size: '32x32', t: 2.3, w: 2.04, a: 2.60, ix: 4.05, iy: 4.05, zx: 2.53, zy: 2.53, rx: 1.25, ry: 1.25 },
  { size: '32x32', t: 3.2, w: 2.69, a: 3.42, ix: 5.02, iy: 5.02, zx: 3.14, zy: 3.14, rx: 1.21, ry: 1.21 },

  // 38x38 (1½x1½)
  { size: '38x38', t: 2.3, w: 2.47, a: 3.15, ix: 7.06, iy: 7.06, zx: 3.72, zy: 3.72, rx: 1.50, ry: 1.50 },
  { size: '38x38', t: 3.2, w: 3.29, a: 4.19, ix: 8.89, iy: 8.89, zx: 4.68, zy: 4.68, rx: 1.46, ry: 1.46 },

  // 50x50 (2x2)
  { size: '50x50', t: 1.6, w: 2.38, a: 3.03, ix: 11.8, iy: 11.8, zx: 4.72, zy: 4.72, rx: 1.97, ry: 1.97 },
  { size: '50x50', t: 2.0, w: 2.91, a: 3.70, ix: 14.1, iy: 14.1, zx: 5.64, zy: 5.64, rx: 1.95, ry: 1.95 },
  { size: '50x50', t: 2.3, w: 3.34, a: 4.25, ix: 16.0, iy: 16.0, zx: 6.40, zy: 6.40, rx: 1.94, ry: 1.94 },
  { size: '50x50', t: 3.2, w: 4.50, a: 5.73, ix: 20.5, iy: 20.5, zx: 8.20, zy: 8.20, rx: 1.89, ry: 1.89 },
  { size: '50x50', t: 3.6, w: 4.90, a: 6.24, ix: 21.8, iy: 21.8, zx: 8.72, zy: 8.72, rx: 1.87, ry: 1.87 },
  { size: '50x50', t: 4.0, w: 5.35, a: 6.81, ix: 23.2, iy: 23.2, zx: 9.28, zy: 9.28, rx: 1.85, ry: 1.85 },
  { size: '50x50', t: 5.0, w: 6.39, a: 8.14, ix: 26.1, iy: 26.1, zx: 10.44, zy: 10.44, rx: 1.79, ry: 1.79 },

  // 75x75 (3x3)
  { size: '75x75', t: 2.3, w: 5.14, a: 6.55, ix: 58.9, iy: 58.9, zx: 15.7, zy: 15.7, rx: 3.00, ry: 3.00 },
  { size: '75x75', t: 3.2, w: 7.01, a: 8.93, ix: 77.8, iy: 77.8, zx: 20.7, zy: 20.7, rx: 2.95, ry: 2.95 },
  { size: '75x75', t: 4.0, w: 8.59, a: 10.95, ix: 92.7, iy: 92.7, zx: 24.7, zy: 24.7, rx: 2.91, ry: 2.91 },
  { size: '75x75', t: 4.5, w: 9.55, a: 12.17, ix: 101.2, iy: 101.2, zx: 27.0, zy: 27.0, rx: 2.88, ry: 2.88 },

  // 100x100 (4x4)
  { size: '100x100', t: 2.3, w: 6.95, a: 8.85, ix: 142.8, iy: 142.8, zx: 28.6, zy: 28.6, rx: 4.02, ry: 4.02 },
  { size: '100x100', t: 3.2, w: 9.52, a: 12.13, ix: 191.2, iy: 191.2, zx: 38.2, zy: 38.2, rx: 3.97, ry: 3.97 },
  { size: '100x100', t: 4.0, w: 11.70, a: 14.95, ix: 230.8, iy: 230.8, zx: 46.2, zy: 46.2, rx: 3.93, ry: 3.93 },
  { size: '100x100', t: 4.5, w: 13.10, a: 16.67, ix: 254.2, iy: 254.2, zx: 50.8, zy: 50.8, rx: 3.90, ry: 3.90 },
  { size: '100x100', t: 6.0, w: 17.00, a: 21.63, ix: 317.2, iy: 317.2, zx: 63.4, zy: 63.4, rx: 3.83, ry: 3.83 },

  // 125x125 (5x5)
  { size: '125x125', t: 3.2, w: 12.00, a: 15.33, ix: 381.2, iy: 381.2, zx: 61.0, zy: 61.0, rx: 4.98, ry: 4.98 },
  { size: '125x125', t: 4.5, w: 16.60, a: 21.17, ix: 515.6, iy: 515.6, zx: 82.5, zy: 82.5, rx: 4.93, ry: 4.93 },
  { size: '125x125', t: 5.0, w: 18.30, a: 23.36, ix: 563.2, iy: 563.2, zx: 90.1, zy: 90.1, rx: 4.91, ry: 4.91 },
  { size: '125x125', t: 6.0, w: 21.70, a: 27.63, ix: 654.2, iy: 654.2, zx: 104.7, zy: 104.7, rx: 4.87, ry: 4.87 },

  // 150x150 (6x6)
  { size: '150x150', t: 4.5, w: 20.10, a: 25.67, ix: 915.8, iy: 915.8, zx: 122.1, zy: 122.1, rx: 5.97, ry: 5.97 },
  { size: '150x150', t: 5.0, w: 22.30, a: 28.36, ix: 1005.6, iy: 1005.6, zx: 134.1, zy: 134.1, rx: 5.95, ry: 5.95 },
  { size: '150x150', t: 6.0, w: 26.40, a: 33.63, ix: 1176.2, iy: 1176.2, zx: 156.8, zy: 156.8, rx: 5.91, ry: 5.91 },
  { size: '150x150', t: 6.3, w: 27.40, a: 34.80, ix: 1210.5, iy: 1210.5, zx: 161.4, zy: 161.4, rx: 5.90, ry: 5.90 }
];

// Steel Sheet Pile data (kg/m²)
export const sheetPileData = [
  {
    section: 'SP-III',
    dimensions: {
      w: 400.0,
      h: 125,
      t: 13,
      w_inch: 15.7,
      h_inch: 4.92,
      t_inch: 0.512
    },
    area: {
      perPile: 76.42,
      perPile_inch: 11.85
    },
    weight: {
      perPile: 60.0,
      perWallWidth: 150.0,
      perPile_lbs: 40.3,
      perWallWidth_lbs: 30.7
    },
    momentOfInertia: {
      perPile: 2220,
      perWallWidth: 16800,
      perPile_inch: 53.30,
      perWallWidth_inch: 123
    },
    sectionModulus: {
      perPile: 223,
      perWallWidth: 1340,
      perPile_inch: 13.60,
      perWallWidth_inch: 24.90
    }
  },
  {
    section: 'SP-IV',
    dimensions: {
      w: 400.0,
      h: 170,
      t: 15.50,
      w_inch: 15.7,
      h_inch: 6.69,
      t_inch: 0.61
    },
    area: {
      perPile: 96.99,
      perPile_inch: 15.03
    },
    weight: {
      perPile: 76.1,
      perWallWidth: 190.0,
      perPile_lbs: 51.1,
      perWallWidth_lbs: 38.9
    },
    momentOfInertia: {
      perPile: 4670,
      perWallWidth: 38600,
      perPile_inch: 112,
      perWallWidth_inch: 283
    },
    sectionModulus: {
      perPile: 362,
      perWallWidth: 2270,
      perPile_inch: 22.10,
      perWallWidth_inch: 42.20
    }
  }
];

// Standard Plate data with all specifications (JIS G3101 SS400)
export const standardPlateData = [
  // Width x Length = 3x6 ft² (Area = 18 ft²)
  { thickness: 3.2, unitWeight: 2.334, dimensions: { "3x6": 42.0, "4x8": 74.7, "4x10": 93.4, "4x16": 149, "4x20": 187, "5x10": 117, "5x20": 233, "5x30": 350, "5x40": 467, "6x30": 420, "6x40": 560 } },
  { thickness: 4.5, unitWeight: 3.282, dimensions: { "3x6": 59.1, "4x8": 105, "4x10": 131, "4x16": 200, "4x20": 263, "5x10": 164, "5x20": 328, "5x30": 492, "5x40": 656, "6x30": 591, "6x40": 788 } },
  { thickness: 5.0, unitWeight: 3.646, dimensions: { "3x6": 65.6, "4x8": 117, "4x10": 146, "4x16": 233, "4x20": 292, "5x10": 182, "5x20": 365, "5x30": 547, "5x40": 729, "6x30": 656, "6x40": 875 } },
  { thickness: 6.0, unitWeight: 4.376, dimensions: { "3x6": 78.8, "4x8": 140, "4x10": 175, "4x16": 280, "4x20": 350, "5x10": 219, "5x20": 438, "5x30": 656, "5x40": 875, "6x30": 788, "6x40": 1050 } },
  { thickness: 7.0, unitWeight: 5.105, dimensions: { "3x6": 91.9, "4x8": 183, "4x10": 204, "4x16": 327, "4x20": 408, "5x10": 255, "5x20": 510, "5x30": 766, "5x40": 1021, "6x30": 919, "6x40": 1225 } },
  { thickness: 8.0, unitWeight: 5.834, dimensions: { "3x6": 105, "4x8": 187, "4x10": 233, "4x16": 373, "4x20": 467, "5x10": 292, "5x20": 583, "5x30": 875, "5x40": 1167, "6x30": 1050, "6x40": 1400 } },
  { thickness: 9.0, unitWeight: 6.564, dimensions: { "3x6": 118, "4x8": 210, "4x10": 263, "4x16": 420, "4x20": 525, "5x10": 328, "5x20": 656, "5x30": 985, "5x40": 1313, "6x30": 1182, "6x40": 1575 } },
  { thickness: 10.0, unitWeight: 7.293, dimensions: { "3x6": 131, "4x8": 233, "4x10": 292, "4x16": 467, "4x20": 583, "5x10": 365, "5x20": 729, "5x30": 1094, "5x40": 1459, "6x30": 1313, "6x40": 1750 } },
  { thickness: 11.0, unitWeight: 8.022, dimensions: { "3x6": 144, "4x8": 257, "4x10": 321, "4x16": 513, "4x20": 642, "5x10": 401, "5x20": 802, "5x30": 1203, "5x40": 1604, "6x30": 1444, "6x40": 1925 } },
  { thickness: 12.0, unitWeight: 8.752, dimensions: { "3x6": 158, "4x8": 280, "4x10": 350, "4x16": 560, "4x20": 700, "5x10": 438, "5x20": 875, "5x30": 1313, "5x40": 1750, "6x30": 1575, "6x40": 2100 } },
  { thickness: 12.7, unitWeight: 9.262, dimensions: { "3x6": 167, "4x8": 296, "4x10": 370, "4x16": 593, "4x20": 741, "5x10": 463, "5x20": 926, "5x30": 1389, "5x40": 1852, "6x30": 1667, "6x40": 2223 } },
  { thickness: 13.0, unitWeight: 9.481, dimensions: { "3x6": 171, "4x8": 303, "4x10": 379, "4x16": 607, "4x20": 758, "5x10": 474, "5x20": 948, "5x30": 1422, "5x40": 1896, "6x30": 1707, "6x40": 2275 } },
  { thickness: 14.0, unitWeight: 10.21, dimensions: { "3x6": 184, "4x8": 327, "4x10": 408, "4x16": 653, "4x20": 817, "5x10": 510, "5x20": 1021, "5x30": 1532, "5x40": 2042, "6x30": 1838, "6x40": 2450 } },
  { thickness: 15.0, unitWeight: 10.94, dimensions: { "3x6": 197, "4x8": 350, "4x10": 438, "4x16": 700, "4x20": 875, "5x10": 549, "5x20": 1094, "5x30": 1641, "5x40": 2188, "6x30": 1969, "6x40": 2626 } },
  { thickness: 16.0, unitWeight: 11.67, dimensions: { "3x6": 210, "4x8": 373, "4x10": 467, "4x16": 747, "4x20": 934, "5x10": 684, "5x20": 1167, "5x30": 1750, "5x40": 2334, "6x30": 2101, "6x40": 2801 } },
  { thickness: 17.0, unitWeight: 12.40, dimensions: { "3x6": 223, "4x8": 397, "4x10": 496, "4x16": 794, "4x20": 992, "5x10": 620, "5x20": 1240, "5x30": 1860, "5x40": 2480, "6x30": 2232, "6x40": 2976 } },
  { thickness: 18.0, unitWeight: 13.13, dimensions: { "3x6": 236, "4x8": 420, "4x10": 525, "4x16": 840, "4x20": 1050, "5x10": 656, "5x20": 1313, "5x30": 1970, "5x40": 2626, "6x30": 2363, "6x40": 2151 } },
  { thickness: 19.0, unitWeight: 13.86, dimensions: { "3x6": 249, "4x8": 444, "4x10": 554, "4x16": 887, "4x20": 1109, "5x10": 693, "5x20": 1386, "5x30": 2079, "5x40": 2772, "6x30": 2495, "6x40": 3326 } },
  { thickness: 20.0, unitWeight: 14.59, dimensions: { "3x6": 263, "4x8": 467, "4x10": 584, "4x16": 934, "4x20": 1167, "5x10": 730, "5x20": 1459, "5x30": 2188, "5x40": 2918, "6x30": 262666, "6x40": 3502 } },
  { thickness: 21.0, unitWeight: 15.32, dimensions: { "3x6": 276, "4x8": 490, "4x10": 613, "4x16": 980, "4x20": 1226, "5x10": 766, "5x20": 1532, "5x30": 2298, "5x40": 3064, "6x30": 2758, "6x40": 3677 } },
  { thickness: 22.0, unitWeight: 16.04, dimensions: { "3x6": 289, "4x8": 513, "4x10": 642, "4x16": 1027, "4x20": 1283, "5x10": 802, "5x20": 1604, "5x30": 2406, "5x40": 3208, "6x30": 2887, "6x40": 3850 } },
  { thickness: 23.0, unitWeight: 16.77, dimensions: { "3x6": 302, "4x8": 537, "4x10": 671, "4x16": 1073, "4x20": 1342, "5x10": 838, "5x20": 1677, "5x30": 2516, "5x40": 3354, "6x30": 3019, "6x40": 4025 } },
  { thickness: 24.0, unitWeight: 17.50, dimensions: { "3x6": 315, "4x8": 560, "4x10": 700, "4x16": 1120, "4x20": 1400, "5x10": 875, "5x20": 1750, "5x30": 2625, "5x40": 3500, "6x30": 3150, "6x40": 4200 } },
  { thickness: 25.0, unitWeight: 18.23, dimensions: { "3x6": 328, "4x8": 583, "4x10": 729, "4x16": 1167, "4x20": 1458, "5x10": 912, "5x20": 1823, "5x30": 2734, "5x40": 3646, "6x30": 3281, "6x40": 4375 } },
  { thickness: 25.4, unitWeight: 18.52, dimensions: { "3x6": 333, "4x8": 593, "4x10": 741, "4x16": 1185, "4x20": 1482, "5x10": 926, "5x20": 1852, "5x30": 2778, "5x40": 3704, "6x30": 3334, "6x40": 4445 } },
  { thickness: 26.0, unitWeight: 18.96, dimensions: { "3x6": 341, "4x8": 607, "4x10": 758, "4x16": 1213, "4x20": 1517, "5x10": 948, "5x20": 1896, "5x30": 2844, "5x40": 3792, "6x30": 3413, "6x40": 4550 } },
  { thickness: 27.0, unitWeight: 19.69, dimensions: { "3x6": 354, "4x8": 630, "4x10": 788, "4x16": 1260, "4x20": 1575, "5x10": 984, "5x20": 1969, "5x30": 2954, "5x40": 3938, "6x30": null, "6x40": 4726 } },
  { thickness: 28.0, unitWeight: 20.42, dimensions: { "3x6": 368, "4x8": 653, "4x10": 817, "4x16": 1307, "4x20": 1634, "5x10": 1021, "5x20": 2042, "5x30": 3063, "5x40": 4084, "6x30": 3544, "6x40": 4901 } },
  { thickness: 29.0, unitWeight: 21.15, dimensions: { "3x6": 381, "4x8": 677, "4x10": 846, "4x16": 1354, "4x20": 1692, "5x10": 1058, "5x20": 2115, "5x30": 3172, "5x40": 4230, "6x30": 3676, "6x40": 5076 } },
  { thickness: 30.0, unitWeight: 21.88, dimensions: { "3x6": 394, "4x8": 700, "4x10": 875, "4x16": 1400, "4x20": 1750, "5x10": 1094, "5x20": 2188, "5x30": 3282, "5x40": 4376, "6x30": 3807, "6x40": 5251 } },
  { thickness: 32.0, unitWeight: 23.34, dimensions: { "3x6": 420, "4x8": 747, "4x10": 934, "4x16": 1494, "4x20": 1867, "5x10": 1167, "5x20": 2334, "5x30": 3501, "5x40": 4668, "6x30": 3938, "6x40": 5602 } },
  { thickness: 34.0, unitWeight: 24.80, dimensions: { "3x6": 446, "4x8": 794, "4x10": 992, "4x16": 1587, "4x20": 1984, "5x10": 1240, "5x20": 2480, "5x30": 3720, "5x40": 4960, "6x30": 4201, "6x40": 5952 } },
  { thickness: 36.0, unitWeight: 26.25, dimensions: { "3x6": 472, "4x8": 840, "4x10": 1050, "4x16": 1680, "4x20": 2100, "5x10": 1312, "5x20": 2625, "5x30": 3938, "5x40": 5250, "6x30": 4464, "6x40": 6300 } },
  { thickness: 38.0, unitWeight: 27.71, dimensions: { "3x6": 499, "4x8": 887, "4x10": 1108, "4x16": 1773, "4x20": 2217, "5x10": 1386, "5x20": 2771, "5x30": 4156, "5x40": 5542, "6x30": 4725, "6x40": 6650 } },
  { thickness: 40.0, unitWeight: 29.17, dimensions: { "3x6": 525, "4x8": 933, "4x10": 1167, "4x16": 1867, "4x20": 2334, "5x10": 1458, "5x20": 2917, "5x30": 4376, "5x40": 5834, "6x30": 4988, "6x40": 7001 } },
  { thickness: 45.0, unitWeight: 32.82, dimensions: { "3x6": 591, "4x8": 1050, "4x10": 1313, "4x16": 2100, "4x20": 2626, "5x10": 1614, "5x20": 3282, "5x30": 4923, "5x40": 6564, "6x30": 5251, "6x40": 7877 } },
  { thickness: 50.0, unitWeight: 36.46, dimensions: { "3x6": 656, "4x8": 1167, "4x10": 1458, "4x16": 2333, "4x20": 2917, "5x10": 1823, "5x20": 3646, "5x30": 5469, "5x40": 7292, "6x30": 5908, "6x40": 8750 } },
  { thickness: 55.0, unitWeight: 40.11, dimensions: { "3x6": 722, "4x8": 1284, "4x10": 1604, "4x16": 2567, "4x20": 3209, "5x10": 2006, "5x20": 4011, "5x30": 6016, "5x40": 8022, "6x30": 6563, "6x40": 9626 } },
  { thickness: 60.0, unitWeight: 43.76, dimensions: { "3x6": 788, "4x8": 1400, "4x10": 1750, "4x16": 2801, "4x20": 3501, "5x10": 2188, "5x20": 4376, "5x30": 6564, "5x40": 8752, "6x30": 7220, "6x40": 10502 } },
  { thickness: 65.0, unitWeight: 47.40, dimensions: { "3x6": 853, "4x8": 1517, "4x10": 1896, "4x16": 3034, "4x20": 3792, "5x10": 2370, "5x20": 4740, "5x30": 7110, "5x40": 9480, "6x30": 7877, "6x40": 11376 } },
  { thickness: 70.0, unitWeight: 51.05, dimensions: { "3x6": 919, "4x8": 1634, "4x10": 2042, "4x16": 3267, "4x20": 4084, "5x10": 2552, "5x20": 5104, "5x30": 7658, "5x40": 10210, "6x30": 9189, "6x40": 12252 } }
];

// Checkered Plate data (JIS G3101 SS400)
export const checkeredPlateData = [
  {
    thickness: 2.3,
    weightPerSqm: 19.73,
    dimensions: {
      '3x6': 33.0,
      '3x12': 66.0,
      '4x8': 58.6,
      '4x10': 73.3,
      '4x16': 177,
      '4x20': '-',
      '5x10': '-',
      '5x20': '-'
    }
  },
  {
    thickness: 3.2,
    weightPerSqm: 26.79,
    dimensions: {
      '3x6': 44.8,
      '3x12': 89.6,
      '4x8': 79.6,
      '4x10': 99.6,
      '4x16': 159,
      '4x20': 199,
      '5x10': '-',
      '5x20': '-'
    }
  },
  {
    thickness: 4.5,
    weightPerSqm: 36.99,
    dimensions: {
      '3x6': 61.8,
      '3x12': 124,
      '4x8': 110,
      '4x10': 137,
      '4x16': 220,
      '4x20': 275,
      '5x10': 172,
      '5x20': 344
    }
  },
  {
    thickness: 6.0,
    weightPerSqm: 48.77,
    dimensions: {
      '3x6': 81.5,
      '3x12': 163,
      '4x8': 145,
      '4x10': 181,
      '4x16': 290,
      '4x20': 362,
      '5x10': 227,
      '5x20': 453
    }
  },
  {
    thickness: 8.0,
    weightPerSqm: 64.47,
    dimensions: {
      '3x6': 108,
      '3x12': 216,
      '4x8': 192,
      '4x10': 240,
      '4x16': 383,
      '4x20': 479,
      '5x10': 299,
      '5x20': 599
    }
  },
  {
    thickness: 9.0,
    weightPerSqm: 72.32,
    dimensions: {
      '3x6': 121,
      '3x12': 242,
      '4x8': 215,
      '4x10': 269,
      '4x16': 430,
      '4x20': 537,
      '5x10': 336,
      '5x20': 672
    }
  },
  {
    thickness: 10.0,
    weightPerSqm: 80.17,
    dimensions: {
      '3x6': 134,
      '3x12': 268,
      '4x8': 238,
      '4x10': 298,
      '4x16': 477,
      '4x20': 596,
      '5x10': 372,
      '5x20': 745
    }
  }
]; 