class ContactsController < ApplicationController
  # POST /contacts
  def create
    # raise params.inspect
    render json: params
  end

  # DELETE /contacts/:id
  def destroy
  end

end
