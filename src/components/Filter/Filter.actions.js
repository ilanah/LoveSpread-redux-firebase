export const FILTER = 'FILTER'

export const filterList = (input_list,filter_by_field, filter_value)=> 
{
    let filterValue=filter_value.toLowerCase();
    let local_output_list=input_list.filter((item)=>{
                    let field = item[filter_by_field].toLowerCase()
                    if (field.indexOf(filterValue)>-1)
                        return item;
                })
    
    return ({ 
        type: FILTER,
        filteredList: local_output_list
    })
}
