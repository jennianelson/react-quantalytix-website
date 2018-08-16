class Api::ContactsController < ApplicationController

  # GET /api/contacts
  def index
    @contacts = Contact.all
    render json: @contacts, status: 200
  end

  # POST /api/contacts
  def create
    if params[:id]
      @contact = Contact.find(params[:id])
    else
      @contact = Contact.create(contact_params)
    end
    render json: @contact, status: 200
  end

  # DELETE /api/contacts/:id
  def destroy
    @contact = Contact.find(params[:id])
    @contact.delete
    render json: {contactId: @contact.id}
  end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :company, :email)
  end

end
