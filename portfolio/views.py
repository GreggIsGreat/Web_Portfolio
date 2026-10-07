import logging
from django.shortcuts import redirect
from django.views.decorators.http import require_POST
from django.contrib import messages
from django.core.mail import EmailMessage
from django.conf import settings
from .forms import ContactForm
from .models import Contact

logger = logging.getLogger(__name__)


@require_POST
def contact(request):
    # Honeypot check - if filled, silently redirect (bot detection)
    if request.POST.get('website'):
        return redirect('/#contact')
    
    form = ContactForm(request.POST)
    
    if not form.is_valid():
        messages.error(request, 'Please correct the errors below.')
        return redirect('/#contact')
    
    # Save the contact to database
    contact = form.save()
    
    # Send email
    try:
        email = EmailMessage(
            subject='New portfolio message',
            body=f'Name: {contact.name}\nEmail: {contact.email}\n\nMessage:\n{contact.message}',
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.ADMIN_EMAIL],
            reply_to=[contact.email],
        )
        email.send()
        messages.success(request, 'Your message has been sent successfully!')
    except Exception as e:
        logger.exception('Failed to send contact email')
        messages.error(request, 'Your message was saved but we could not send the email notification.')
    
    return redirect('/#contact')