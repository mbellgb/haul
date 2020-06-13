class Api::ApiController < ApplicationController
  def not_found
    render json: { errors: "Not found" }, status: :not_found
  end

  private

  def json_response(object, status: :ok)
    object = object.as_json if object.class.method_defined? :as_json
    if object.is_a?(Array)
      render json: object.map { |x| camelize(x) }, status: status
    else
      render json: camelize(object), status: status
    end
  end

  def camelize(object)
    object.deep_transform_keys { |x| x.to_s.camelize(:lower) }
  end
end
