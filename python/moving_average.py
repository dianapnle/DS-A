class MovingAverage:
  def __init__(self, window_size):
    #if window_size is not an integer
    if not isinstance(window_size, int):
        raise TypeError(f"Window size: {window_size} is not an integer")
    #window_size is 0 or negative
    if window_size <= 0:
        raise ValueError(f"Window size: {window_size} has to be a positive integer")
    self.window_size = window_size
    self.list = []
    self.sum = 0

  def add(self, n):
    #if n is not an integer or float
    if not isinstance(n, (int, float)):
       raise ValueError(f"User added invalid value: {n}")

    self.list.append(n)
    self.sum += n
    if len(self.list) > self.window_size:
        remove = self.list.pop(0)
        self.sum -= remove



  def get_moving_average(self):
    #if not enough data points to fill window_size req -> not enough data
    if len(self.list) < self.window_size:
        raise ValueError(f"Not enough data points to calculate average")

    print(self.sum / self.window_size)

a = MovingAverage(window_size=2)
a.add(1)
a.add(2)
a.get_moving_average()
a.add(3)
a.get_moving_average() # returns (2+3) / 2
a.add(4)
a.get_moving_average() # returns (3+4) / 2
a.add(5)
a.get_moving_average() #returns (4+5) / 2
