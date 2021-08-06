// const arr = [
//   {
//     name: 'hrm', 
//     functionality: {
//       employee_metadata: {
//         Employee_Metadata1: {
//            Divisions: ['List', 'Add', 'Edit']
//         }, 
//         Employee_Metadata2: {
//            Divisions: ['List', 'Add', 'Edit']
//         }
//       }
//     }
//   },
//   {
//     name: 'fico', 
//     functionality: {
//       employee_metadata: {
//         Employee_Metadata1: {
//            Divisions: ['List', 'Add', 'Edit']
//         }, 
//         Employee_Metadata2: {
//            Divisions: ['List', 'Add', 'Edit']
//         }
//       }
//     }
//   }
// ]
const arr = [
  {
    name: 'HRM',
    functionality: {
      Employee_Metadata: {
        Employee_Metadata1: {
          Divisions: ['List', 'Add', 'Edit'],
          Districts: ['List', 'Add', 'Edit'],
          Office_Divisions: ['List', 'Add', 'Edit'],
          Departments: ['List', 'Add', 'Edit'],
          Designations: ['List', 'Add', 'Edit'],
          Institutes: ['List', 'Add', 'Edit'],
          Degrees: ['List', 'Add', 'Edit'],
          Banks: ['List', 'Add', 'Edit'],
          Branches: ['List', 'Add', 'Edit'],
          Action_Types: ['List', 'Add', 'Edit'],
          Action_Reasons: ['List', 'Add', 'Edit'],
        },
        Employee_Metadata2: {
          Divisions: ['List', 'Add', 'Edit'],
          Districts: ['List', 'Add', 'Edit'],
          Office_Divisions: ['List', 'Add', 'Edit'],
          Departments: ['List', 'Add', 'Edit'],
          Designations: ['List', 'Add', 'Edit'],
          Institutes: ['List', 'Add', 'Edit'],
          Degrees: ['List', 'Add', 'Edit'],
          Banks: ['List', 'Add', 'Edit'],
          Branches: ['List', 'Add', 'Edit'],
          Action_Types: ['List', 'Add', 'Edit'],
          Action_Reasons: ['List', 'Add', 'Edit'],
        },
      },
      Manage_Employee: {
        Employee_List: ['List', 'Add', 'Edit'],
        Leave_Status: ['List', 'Add', 'Edit'],
        Attendance: ['List', 'Add', 'Edit'],
        Promotions: ['List', 'Add', 'Edit'],
        Terminations: ['List', 'Add', 'Edit'],
        Warning: ['List', 'Add', 'Edit'],
      },
    },
  },
  {
    name: 'FICO',
    functionality: {
      General_Ledger: {
        Divisions: ['List', 'Add', 'Edit'],
        Districts: ['List', 'Add', 'Edit'],
      },
      Accounts_Payable: {
        Employee_List: ['List', 'Add', 'Edit'],
        Leave_Status: ['List', 'Add', 'Edit'],
      },
      Cash_management: {
        Employee_List: ['List', 'Add', 'Edit'],
        Leave_Status: ['List', 'Add', 'Edit'],
      },
    },
  },
  {
    name: 'MM',
    functionality: {
      Asset_Accounting: {
        Divisions: ['List', 'Add', 'Edit'],
        Distraicts: ['List', 'Add', 'Edit'],
      },
      Funds_management: {
        Employee_List: ['List', 'Add', 'Edit'],
        Leave_Status: ['List', 'Add', 'Edit'],
      },
      Treasury_Management: {
        Employee_List: ['List', 'Add', 'Edit'],
        Leave_Status: ['List', 'Add', 'Edit'],
      },
    },
  },
  {
    name: 'FSCM',
    functionality:{
      Sales: {
        Divisions: ['List', 'Add', 'Edit'],
        Districts: ['List', 'Add', 'Edit'],
      },
      Shipping_and_transportation: {
        Employee_List: ['List', 'Add', 'Edit'],
        Leave_Status: ['List', 'Add', 'Edit'],
      },
      Bills_of_Material: {
        Employee_List: ['List', 'Add', 'Edit'],
        Leave_Status: ['List', 'Add', 'Edit'],
      },
    },
  },
];
function convertToString(a,b) { 
  return b.toString()+'/'+a.toString(); 
}
function fun(element,toAddOnValue) {
  if(Array.isArray(element)) {
    let newArrayOfChildren = []; 
    for(const arrayElement of element) { 
      let newChild; 
      if(typeof(arrayElement)==='object') { 
        newChild = {
          value: convertToString(arrayElement, toAddOnValue),
          label: arrayElement,
          children: fun(
            arrayElement,
            convertToString(arrayElement, toAddOnValue)
          ),
        };
      } else { 
        newChild = {
          
          value: convertToString(arrayElement,toAddOnValue), 
          label: arrayElement,
        }
      }
      newArrayOfChildren.push(newChild); 
    }
    return newArrayOfChildren; 
  }


  else if(typeof(element)==='object'){ 
    let newArrayOfChildren = []; 
    for(const property in element) { 
      newArrayOfChildren.push({
        value: convertToString(property, toAddOnValue),
        label: property,
        children: fun(
          element[property],
          convertToString(property, toAddOnValue)
        ),
      }); 
    }
    return newArrayOfChildren; 
  } else { 
    return { 
      value: convertToString(element,toAddOnValue), 
      label: element, 
    }
  }
}
const ra = arr.map(el=> {
  return {
    value: el.name, 
    label: el.name, 
    children: fun(el.functionality,el.name)
  }
})
console.log(ra); 