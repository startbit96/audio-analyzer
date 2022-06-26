use wasm_bindgen::prelude::*;
use std::mem;

static mut INPUT_BUFFER: [i32; 3] = [0; 3];

#[wasm_bindgen]
pub fn get_input_buffer_pointer() -> *const i32 {
  let pointer: *const i32;
  unsafe {
    pointer = INPUT_BUFFER.as_ptr();
  }
  return pointer;
}

#[wasm_bindgen]
pub fn get_buffer_value_byte_size() -> usize {
  return mem::size_of::<i32>();
}

#[wasm_bindgen]
pub fn get_sum() -> i32 {
  unsafe {
    return INPUT_BUFFER.iter().sum();
  }
}