export const generateTotalsForFloor = (floor) => {
  const {
    compactAvailable,
    largeAvailable,
    handicappedAvailable,
    motorcycleAvailable,
    compactCapacity,
    largeCapacity,
    handicappedCapacity,
    motorcycleCapacity,
  } = floor;

  const totalAvailable =
    compactAvailable +
    largeAvailable +
    handicappedAvailable +
    motorcycleAvailable;

  const totalCapacity =
    compactCapacity + largeCapacity + handicappedCapacity + motorcycleCapacity;

  return { totalAvailable: totalAvailable, totalCapacity: totalCapacity };
};
