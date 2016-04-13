require "administrate/field/base"

class CarrierwaveField < Administrate::Field::Base
  def to_s
    data
  end

  def url
    data.url
  end

  # def thumbnail
  #   data.url(:thumb)
  # end
end
