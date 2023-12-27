export class Newsim {
        constructor(
        
          public firstName: string,
          public lastName: string,
          public dob: Date, // You can use a string for date format
          public emailAddress: string,
          public loginPassword: string,
          public status:string,
          public orderId:string,
          public userSimDetails: UserSimDetails[],
        ) {}
      }
      
      export class UserSimDetails {
        constructor(
          public address: string,
          public location: string,
          public noofsims: number,
          public simData: SimData[],

          
        ) {}
      }
      export class SimData {
        constructor(
          public phonenumber: string,
          public simcardnumber: string,
          public plan: string = 'basic plan',
          public simcardstatus: string = 'inactive',
          public phoneNumberstatus: string = 'inactive'
        ) {}
      }
      
      
  