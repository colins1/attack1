import Daemon from '../js/Daemon';

test('should return the created Daemon', () => {
  const damage = new Daemon('John')
  expect(() => {
    damage.stoned = 'true'
  }).toThrow('баг наложения дурмана');
});

test('should return the created Daemon', () => {
  const damage = new Daemon('John')
  damage.stoned = true
  expect(damage.stoned).toBe(true);
});

test('should return the created Daemon', () => {
  const damage = new Daemon('John')
  damage.attacks = 3
  expect(damage.attacks).toBe(8);
});