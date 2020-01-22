<?php

namespace Solsticio\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ParkingMail extends Mailable
{
    use Queueable, SerializesModels;
    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('juliangarzondeveloper@gmail.com')->subject('Estado petición de parqueadero Solsticio Etapa 5')->view('mails/parking')->with('data', $this->data);
    }
}