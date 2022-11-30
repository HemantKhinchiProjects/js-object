//-----------function object create singal time
export const car_details = (brands, speed, color) => {
  return {
    carWhile: 4,
    brands: brands,
    max_speed: speed,
    color: color,
  };
};
//-----------function1 for Delete object
export const deketedata = (tempbj) => {
  const temp = tempbj;
  delete temp.carTwo;

  return temp;
};
//-----------function2 for Delete object
export const deletedata = (tempbj) => {
  const temp2 = tempbj;
  delete temp2.coloe;
  return temp2;
};
