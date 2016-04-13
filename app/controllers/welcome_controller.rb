class WelcomeController < ApplicationController
  def index
  end

 def pdf
 send_file "#{Rails.root}/public/img/CV.pdf", :type=>"application/pdf", :x_sendfile=>true
 end
end
