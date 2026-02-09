package BigInts.Bigints.Controller;

import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@RestController
@RequestMapping("/api/careers")
public class CareersController {

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/apply")
    public ResponseEntity<?> apply(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam(required = false) String phone,
            @RequestParam(required = false) String linkedin,
            @RequestParam(required = false) String coverLetter,
            @RequestParam(required = false) String jobTitle,
            @RequestParam(required = false) MultipartFile resume
    ) {
        try {
            // optional: save resume to local disk
            String storedFilename = null;
            if (resume != null && !resume.isEmpty()) {
                String original = StringUtils.cleanPath(resume.getOriginalFilename());
                String ext = "";
                int idx = original.lastIndexOf('.');
                if (idx > 0) ext = original.substring(idx);
                storedFilename = UUID.randomUUID().toString() + ext;
                Path target = Paths.get("uploads").resolve(storedFilename);
                Files.createDirectories(target.getParent());
                Files.write(target, resume.getBytes());
            }

            // Send email to HR
            MimeMessage msg = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(msg, true);
            helper.setTo("hr@bigints.com"); // replace with real HR email
            helper.setSubject("New Application: " + (jobTitle != null ? jobTitle : "General Application"));
            StringBuilder sb = new StringBuilder();
            sb.append("Name: ").append(name).append("\n");
            sb.append("Email: ").append(email).append("\n");
            if (phone != null) sb.append("Phone: ").append(phone).append("\n");
            if (linkedin != null) sb.append("LinkedIn: ").append(linkedin).append("\n\n");
            sb.append("Cover Letter:\n").append(coverLetter == null ? "" : coverLetter);

            helper.setText(sb.toString());

            if (resume != null && !resume.isEmpty()) {
                helper.addAttachment(resume.getOriginalFilename(), new ByteArrayResource(resume.getBytes()));
            }

            mailSender.send(msg);

            return ResponseEntity.ok().body("Application submitted");
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.status(500).body("Error: " + ex.getMessage());
        }
    }
}
