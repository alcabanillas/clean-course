
interface Bird {
  eat() : void;
}

interface FlyingBird {
  fly() : number;
}

interface SwimmingBird{
  swim() : void;
}

interface RunningBird{
  run() : void;
}


class Tucan implements Bird, FlyingBird {
  public fly(){ return 100;}
  public eat(){}
}

class Humminbird implements Bird, FlyingBird{
  public fly(){ return 400;}
  public eat(){}
}

class Ostrich implements Bird, RunningBird{
  eat(): void {
    throw new Error("Method not implemented.");
  }
  run(): void {
    throw new Error("Method not implemented.");
  }
}

class Penguin implements Bird, SwimmingBird{
  eat(): void {
    throw new Error("Method not implemented.");
  }  
  public swim(){  }
}

