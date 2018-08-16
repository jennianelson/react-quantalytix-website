class ContactsController < ApplicationController

  # GET /contacts
  def index
    @contacts = Contact.all
    render json: @contacts
  end

  # POST /contacts
  def create
    # raise params.inspect
    if !Contact.find(params[:id])
      @contact = Contact.create(contact_params)
    else
      @contact = Contact.find(params[:id])
    end
    render json: @contact
  end

  # DELETE /contacts/:id
  def destroy
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :company, :email)
  end

end
