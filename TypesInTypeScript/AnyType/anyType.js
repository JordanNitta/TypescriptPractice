"use strict";
// Any Type - used when we don't know what type of the variable is and what the type of the variable is going to be because we don't know what the variable holds
// Second sistuation will be when we don't want the type of the variable to be anything else we want it to explicity to be any type
// Bad practice - 
// Unintilized 
let password;
// No error but the type of this any varable can be a string
// The issue with any we loose the core functionality of type script since it can't fully understand it
// Bad practice
password = 12345;
password = "12345";
