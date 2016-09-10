import angular from "angular";

// export default function percentfilter() {
//   return function($filter){
//     return function(input){
//       return (input) + "%";
//     }
//   }
// }

export default function percentfilter() {
  return function($filter){
    return function(input){
      //return $filter('number')(input, 0) + "%";
      return input + "%";
    }
  }
}