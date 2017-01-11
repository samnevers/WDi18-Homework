# Modify the program from the previous exercise to use named captures instead of relying on $1. Update the code to display that label name, something like 'word' contains 'Wilma'.

require 'pry'

term = "wilma"
regex = /(?<word>\w.*[a]\b)/
p term.match regex
better_regex = /(?<word>\w.*[a]$)/
p term.match better_regex

ARGF.each do |line|
  if line.match(/(?<word>\w.*[a]$)/)
    matches = line.match(/(?<word>\w.*[a]$)/)
    puts "word" + " contains #{matches[:word]}"
  end
end
