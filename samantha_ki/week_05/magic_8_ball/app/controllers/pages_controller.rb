class PagesController < ApplicationController

  def home
  end
  # this is simply showing the home page

  def index
    @questions = Question.all
  end
  # we want this to show all the questions asked

  def show
    @question = Question.find params[:id]
  end
  # this will show an individual page for each question asked

  def ask
  end
  # we want a form for users to submit questions
    # questions will be displayed at index
    # questions will be redirected to receive an answer

  def add

  end

  # this is the corresponding get that receives the user's input/question

  def answer
    answers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
      ]
    @answer = answers.sample
  end

# private
#   def questions_params
#     params.require(:question).permit(:question)
#   end

end


# get "/home" => "pages#home"
#
# get "/questions" => "pages#index"
#
# get "/ask" => "pages#ask"
# post "/questions" => "pages#add"
# get "/answer" => "pages#answer"
#
# get "/questions/:id" => "pages#show"
