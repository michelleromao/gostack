import { Router } from 'express';
import { parseISO } from 'date-fns';
import ApppointmentsRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new ApppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();
  response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);
    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

export default appointmentsRouter;
