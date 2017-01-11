# Using the pattern test program, make a pattern to match the string match. Try the program with the input string beforematchafter. Does the output show the three parts of the match in the right order?

require 'pry'

ARGF.each do |line|
  if line =~ /match/
    puts line
  end
end
