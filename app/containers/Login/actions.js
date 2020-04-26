/*
 *
 * Login actions
 *
 */

import { SUBMIT_MOB_DRA, SUBMIT_MOBOTP_DRA, UPDATE_FIELD } from "./constants";

  
  export function submitMobileNumber (dataPack) {
    console.log(dataPack)
      return {
          type: SUBMIT_MOB_DRA,
          dataPack
      }
  }
  
  export function submitMobOTP (datapack) {
      return {
          type: SUBMIT_MOBOTP_DRA,
          ...datapack
      }
  }
  
  
  
  export function updateField(datapack) {
    return {
      type: UPDATE_FIELD,
      ...datapack
    };
  }
  