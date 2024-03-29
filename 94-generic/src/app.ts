// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })

// 제네릭 제약 extends
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

// console.log(countAndDescribe(''));
// console.log(countAndDescribe('Hi There!'));
// console.log(countAndDescribe(['Sports', 'Games']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

// console.log(extractAndConvert({name: 'Max'}, 'name'))

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.slice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

// textStorage.addItem('Max');
// textStorage.addItem('Manu');
// textStorage.removeItem('Max');

// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// numberStorage.addItem(0);
// numberStorage.addItem(1);
// numberStorage.removeItem(0);

// console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Max' });
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem({ name: 'Max' });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Sports'];
// names.push('Manu');
// names.pop();
