# Angular Unit Testing :

# First learn jasmine testing course: But we are skipping that.

# Why and when to write unit test -> good unit test.

# Unit test = Automated testing.

#  Two types of unit tests
 - Isolated: testing of a single unit which is not dependent on any on the thing.
 - Integrated: Two or more pieces of code have to test at the same time.

# Prerequits :
- Jasmine Testing Framework
- Karma Test Runner

# Installation :
- Angular CLI itself download and install.
- $ ng test.

# Testing Overview in angular
- Unit Testing
- E2E Testing
- Integration or Functional Testing

- Unit and E2E testing are very strainght forward and well defined testing.
- Integrated testing varies depending upon the application.
- E2E testing is a kind of testing done on live running application y automatiting the browser. With live database.
- Tests are written to manipulat the browser in an automated way to do various things 
- E2E can validate the full application working properly or not. but slow and difficult of writing tests.
- E2E are less reliable than other testings.

# Unit Testing:
- testing is done on single unit of code or class.
- Integration and functional testing is more than unit testing ie more than 1 unit but not complete application.

# Pictorial Representation:
- Unit Testing : [User Component].
- Integration Testing : [User Component + User Service].
- E2E Testing : Running on live Server : Live server = [Front End + Web server + Database].
- Angular Integration Testing : Unit Test Kind : [User Component + User Component Template].

# Unit Testing in Angular :
- Isolated Unit Test : Normal unit test : 
- Unit = Seperate peice of code = Business logic that need to be tested in isolation
- Units = Pipe | Service | Class | Component | Directives

# NOTE 
- In isolation we should always mock our dependencies which will save our resource and memory and internet data.

- in Isolation unit testing, we dont test the template parts for a component, only the logic behind it.
- we test methods that have the expected behaviour.
- Integration tests are bit more complex. In angular test we actually create a module the we test.
-

# Types of intration test:
1. Shallow Test
2. Deep Test / Integration test

1. Shallow test:
- We only test a single component with its template.

2. Integration Test:
- Test many components actaully having child components.

# Mocking = Very useful when we want to test single unit of code.

Mocks = Dummies | Stubs | Spies |
--------------------------------------------------------------

# Create nwe Angular project
- ng new Angular-Unit-Testing
- cd Angular-Unit-Testing
- karma.config.js = configuration file.
- .spec.ts is the filw which karma take as testing files.
- ng g config karma // to generata karma.congif.js file which will contain the all the configuration fo the karma testing.

# Create a .spec.ts file for yourself.
- describe = test-suite

describe ('first test is here babdy', () =>{
let a : number = 5;

// life cycle method
beforeEach() =>{
    a = {};
}
it('should return true is true)
})

First test return true if a is true.

- User service getUser method should return the correct given user

describe('', ()=>{
    describe('getUser() method', ()=>{
        it('should return the correct given user', ()=>{
            //code
        })
    })
})

- Arrange | Act | Assert

describe('', ()=>{
    it('', ()=>{
        //arrange
        test.a = false;
        //act
        test.a = true;
        //assert
        expect(test.a.toBe(true);

    })
})

- ng test // run karma test runner
- 
# Calculator operation testing

- create a calculator service file
- add add() and sub() methods.
- ng g s services/calculator/calculator
- 


# Calculator Service Testing :
import { CalculatorService } from "./calculator.service";

describe('Calculator Service', ()=>{
  it('should be in pending state', ()=>{
    pending(); // pending state
  });
  xit('should be temperarorly disabled, And not be tested', ()=>{
    // temperarorly disabled test
  });

  it('intententionally failing the test', ()=>{
    fail(); // pending state
  });

  // running code 
  it('should add two numbers', ()=>{
    // create a service instance
    const calculator = new CalculatorService();
    let result = calculator.add(2,2);
    expect(result).toBe(4);
  });
  it('should subtract two numbers', ()=>{
    const calculator = new CalculatorService();
    let result = calculator.sub(4,2);
    expect(result).toBe(2);
  });
});
----------------------------------------------------------------------------------------
# Dependency Injection :
- component depending on a service.

- logger service : if function is called log that thing

- ng g s logger
code:

- logger service should be called only once either for add or subtract to save resource.
- in testing we should not create instance of logger or any service . it is calling the actual service

- use jasmine spies to save the resoucce.
----------------------------------------------------------

 // logging add and sub message
  it('should add two numbers', ()=>{
    //logger instance
    let logger = new LoggerService();
    // create a service instance
    const calculator = new CalculatorService(logger);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
  });
  it('should subtract two numbers', ()=>{
    let logger = new LoggerService();
    const calculator = new CalculatorService(logger);
    let result = calculator.sub(4,2);
    expect(result).toBe(2);
  });

  // saving resource by calling logger for one tme only for sub or add both, and using jasmine spies so that we dont have to call the actaul service in the testing environment.

  // Mocking injection service :
  
  # Mocking / Spies in jasmine : Ideal method to test a dependency injected service.

  // Jasmine instance
describe('Calculator Spies Mocking callthrough', ()=>{
  it('should add two numbers', ()=>{
    //logger instance
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    // create a service instance
    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers', ()=>{
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    const calculator = new CalculatorService(mockLoggerService);
    let result = calculator.sub(4,2);
    expect(result).toBe(2);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});

// Now test will not touch the loggerService and crete a mock service
// Hit = 0 cox debugger never go to the original service file.

------------------------------------------------------------------------------

# BeforeEach 

- in last code the code is being repeated so, make it a single code with lifecycle method.

- BeforeEach : Before running any test cased , It will be executed first everytime.
- but also create global variable also which are being used in the test it conditions.

// Before Each is being added :
describe('Calculator Spies Mocking callthrough', ()=>{

  let mockLoggerService : any;
  let calculator: CalculatorService;
  beforeEach(()=>{
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(mockLoggerService);
  });
  
  it('should add two numbers', ()=>{
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers', ()=>{
    let result = calculator.sub(4,2);
    expect(result).toBe(2);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});

# describe('Calculator Spies Mocking callthrough', ()=>{
  let mockLoggerService : any;
  let calculator: CalculatorService;
  beforeEach(()=>{
    console.log('calling before each');
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(mockLoggerService);
  });
  
  it('should add two numbers', ()=>{
    console.log('calling add');
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should subtract two numbers', ()=>{
    console.log('calling sub');
    let result = calculator.sub(4,2);
    expect(result).toBe(2);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});

# https://github.com/leelanarasimha/Ang...
------------------------------------------------------------------------------------
# Angular Pipes : Unit Test

- ng g pipe pipes/strength/strength

- transform(value: number): string {
      if(value<10){
        return value + '(weak)';
      }
      else if(value>=10 && value < 20){
        return value + '(strong)';
      }
      else{
        return value + '(strongest)';
      }
  }

- describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak for 5', ()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5(weak)');
  });
});

# Writing isolated Unit Test : 
- logger service 
- logger service test cases
- export class LoggerService {

  messages : string[] = [];
  log(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
}

- import { LoggerService } from "./logger.service"

describe('LoggerService fourth :', ()=>{
  it('should not have any message at starting', ()=>{
    //arrange
    const service = new LoggerService();
    // act
    let count = service.messages.length;
    //assert
    expect(count).toBe(0);
  });

  it('should add the message when log is called', ()=>{
    // arrange
    const service = new LoggerService();
    //act
    service.log('message');
    //assert
    expect(service.messages.length).toBe(1);
  });

  it('should clear all the messages when clear is called', ()=>{
    //arrange
    const service = new LoggerService();
    service.log("some message before clearing");
    //act
    service.clear();
    //assert
    expect(service.messages.length).toBe(0);
  });
});

# Create posts components and Post service for getting posts data :

- postService:
 - constructor(public http : HttpClient) { }

  url : string = "https://jsonplaceholder.typicode.com/posts";

  getPostService(){
    return this.http.get<Post[]>(this.url)
  }

  deletePostService(post : Post){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
  }

- component.ts
- constructor(public postservice : PostService){}
  ngOnInit():void{
    this.getPosts();
  }

  posts : Post[] = [];

  getPosts(){
   this.postservice.getPostService().subscribe((posts)=>{
    this.posts = posts;
   })
  }

  deletePosts(post : Post){
    this.posts = this.posts.filter((p)=> p.id!== post.id);
    this.postservice.deletePostService(post).subscribe();
    }

# Tesing post component : 


# 14 Write Test cases for Delete method : 