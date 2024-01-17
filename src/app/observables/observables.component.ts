import { Component } from '@angular/core';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  array:any[]=[]

  //1 creatin  a observable


                  //this observable

  myObservable = new Observable((observer)=>{   // this observer is nothing but an observer
    setTimeout(() => {
      observer.next(1)
    }, 1000); 
     setTimeout(() => {
       observer.next(2)
    }, 2000); 
     setTimeout(() => {
       observer.next(4)
    }, 3000); 
     setTimeout(() => {
      //  observer.error(new Error('something went wrong try again later'))
    }, 4000); 
     setTimeout(() => {
       observer.complete()
    }, 5000); 
     setTimeout(() => {
       observer.next(7)
    }, 6000); 
     setTimeout(() => {
       observer.next(8)
    }, 7000); 
     setTimeout(() => {
       observer.next(9)
    }, 8000); 
    })


   secondObservables =  new Observable((obs)=>{      
    setTimeout(() => {
      obs.next('hey its on...')
    }, 2222);
    setTimeout(() => {
      obs.next('hey its ended')
      
    }, 3333);
   }) 

  // //this is observer
  showData() {
  //   this.myObservable.subscribe(
  //     (val: any) => {   // This is the next callback function
  //       this.array.push(val);  // Push the received value to the array
  //     },
  //     (err) => {   // This is the error callback function
  //       console.log(err.message);  // Log the error message to the console
  //     },
  //     () => {   // This is the complete callback function
  //       console.log('Streaming has completed');  // Log a message when the observable stream has completed
  //     }
  //   );
  // }
  
  this.myObservable.subscribe({
    next(val:any){
      this.array.push(val)
    },
    error(msg:any){
      console.log(msg.message);
    },
    complete(){
      console.log('all data streamed');
      
    }
  })
  
    // this.secondObservables.subscribe((val) => {
      // console.log(val);
    // });
  }
}



