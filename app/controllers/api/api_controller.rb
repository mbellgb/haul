class Api::ApiController < ApplicationController
  def not_found
    render json: { errors: "Not found" }, status: :not_found
  end
end
