import {auth, database} from '../../store';
import Crypto from 'crypto';

export const GET_CONTACTS_REQUESTED = 'GET_CONTACTS_REQUESTED';
export const GET_CONTACTS_REJECTED = 'GET_CONTACTS_REJECTED';
export const GET_CONTACTS_FULFILLED = 'GET_CONTACTS_FULFILLED';

export function getContacts() {
  return dispatch => 
  {
      dispatch(getContactsRequestedAction());
      console.log("auth'" + JSON.stringify(auth));

      return database.ref('contacts').once('value', snap => 
                                          {
                                            const contacts = snap.val();
                                            dispatch(getContactsFulfilledAction(contacts))
                                          })
                                    .catch((error) => 
                                     {
                                        console.log(error);
                                        dispatch(getContactsRejectedAction());
                                     });
  }
}

function getContactsRequestedAction() {
  return {
    type: GET_CONTACTS_REQUESTED
  };
}

function getContactsRejectedAction() {
  return {
    type: GET_CONTACTS_REJECTED
  }
}

function getContactsFulfilledAction(contacts) {
  //manipulate contacts
  Object.keys(contacts).map((key,id)=>{
                    let {displayName,email,phoneNumbers,photos, accounts}=contacts[key];

                    contacts[key].displayName = displayName+'';

                    let main_email=null,
                        md5Email=null,
                        contactPhoto = null;
                    
                    if (photos) 
                    {
                        for (var j = 0; j < photos.length; j++)
                        {
                            if (photos[j]!=null) {
                                contactPhoto = photos[j].value;
                                break;
                            }
                        }
                    }

                    if (contactPhoto == null)
                    {
                      if (email)
                      {
                        Object.keys(email).map((key, id) => (
                            email[key].value?
                              md5Email = Crypto.createHash("md5").update(email[key].value.trim().toLowerCase()).digest("hex"):md5Email
                        ))
                      }

                      var imgDefault="mm"; //or mm | identicon | monsterid | wavatar | retro
                      var imgSize=80;
                  
                      if (md5Email!=null)
                      {
                          contactPhoto = "http://www.gravatar.com/avatar/" + md5Email.toString() + "?size="+imgSize+"&default="+imgDefault;               
                      }
                      else
                      {
                          contactPhoto = "http://www.gravatar.com/avatar/?size="+imgSize+"&default="+imgDefault;
                      }
                    }
                    contacts[key].photo=contactPhoto;
    
                    let origin="phone";
                    let idInOrigin="";
                    let className="phone";
                    if (phoneNumbers && phoneNumbers[0])
                    {
                      idInOrigin = phoneNumbers[0].value;
                    }
                    if(accounts)
                    {
                      if(accounts.twitter)
                      {
                        origin="twitter";
                        idInOrigin=accounts.twitter;
                        className="twitter";
                      }
                      else if (accounts.facebook)
                      {
                        origin="facebook";
                        idInOrigin=accounts.facebook;
                        className="facebook f";
                      }
                      //else if google+ => className="google plus"
                      //... or email etc.=> className="mail"
                    }

                    contacts[key].origin=origin;
                    contacts[key].idInOrigin=idInOrigin;
                    contacts[key].className=className;

                    return contacts[key];
                })
  return {
    type: GET_CONTACTS_FULFILLED,
    contacts
  };
}