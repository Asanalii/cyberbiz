const useHomeDirection = () => {
  const direction = localStorage.getItem('home__direction');
  if (direction === 'left') {
    localStorage.setItem('home__direction', 'right');
    return true;
  }
  localStorage.setItem('home__direction', 'left');
  return false;
};

export default useHomeDirection;
