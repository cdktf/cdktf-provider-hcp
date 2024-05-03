# `waypointApplicationTemplate` Submodule <a name="`waypointApplicationTemplate` Submodule" id="@cdktf/provider-hcp.waypointApplicationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WaypointApplicationTemplate <a name="WaypointApplicationTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template hcp_waypoint_application_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplate;

WaypointApplicationTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .summary(java.lang.String)
    .terraformCloudWorkspaceDetails(WaypointApplicationTemplateTerraformCloudWorkspaceDetails)
    .terraformNoCodeModule(WaypointApplicationTemplateTerraformNoCodeModule)
//  .description(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .projectId(java.lang.String)
//  .readmeMarkdownTemplate(java.lang.String)
//  .variableOptions(IResolvable)
//  .variableOptions(java.util.List<WaypointApplicationTemplateVariableOptions>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.summary">summary</a></code> | <code>java.lang.String</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.terraformNoCodeModule">terraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | List of labels attached to this Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint Application Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>java.lang.String</code> | Instructions for using the template (markdown format supported. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.variableOptions">variableOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>></code> | List of variable options for the template. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.summary"></a>

- *Type:* java.lang.String

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#summary WaypointApplicationTemplate#summary}

---

##### `terraformCloudWorkspaceDetails`<sup>Required</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.terraformCloudWorkspaceDetails"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#terraform_cloud_workspace_details WaypointApplicationTemplate#terraform_cloud_workspace_details}

---

##### `terraformNoCodeModule`<sup>Required</sup> <a name="terraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.terraformNoCodeModule"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#terraform_no_code_module WaypointApplicationTemplate#terraform_no_code_module}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#description WaypointApplicationTemplate#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.List<java.lang.String>

List of labels attached to this Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#labels WaypointApplicationTemplate#labels}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#project_id WaypointApplicationTemplate#project_id}

---

##### `readmeMarkdownTemplate`<sup>Optional</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.readmeMarkdownTemplate"></a>

- *Type:* java.lang.String

Instructions for using the template (markdown format supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#readme_markdown_template WaypointApplicationTemplate#readme_markdown_template}

---

##### `variableOptions`<sup>Optional</sup> <a name="variableOptions" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.Initializer.parameter.variableOptions"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>>

List of variable options for the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#variable_options WaypointApplicationTemplate#variable_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails">putTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule">putTerraformNoCodeModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putVariableOptions">putVariableOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetReadmeMarkdownTemplate">resetReadmeMarkdownTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetVariableOptions">resetVariableOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTerraformCloudWorkspaceDetails` <a name="putTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails"></a>

```java
public void putTerraformCloudWorkspaceDetails(WaypointApplicationTemplateTerraformCloudWorkspaceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformCloudWorkspaceDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---

##### `putTerraformNoCodeModule` <a name="putTerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule"></a>

```java
public void putTerraformNoCodeModule(WaypointApplicationTemplateTerraformNoCodeModule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putTerraformNoCodeModule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

---

##### `putVariableOptions` <a name="putVariableOptions" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putVariableOptions"></a>

```java
public void putVariableOptions(IResolvable OR java.util.List<WaypointApplicationTemplateVariableOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.putVariableOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetReadmeMarkdownTemplate` <a name="resetReadmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetReadmeMarkdownTemplate"></a>

```java
public void resetReadmeMarkdownTemplate()
```

##### `resetVariableOptions` <a name="resetVariableOptions" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.resetVariableOptions"></a>

```java
public void resetVariableOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplate;

WaypointApplicationTemplate.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplate;

WaypointApplicationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplate;

WaypointApplicationTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplate;

WaypointApplicationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WaypointApplicationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a WaypointApplicationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WaypointApplicationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WaypointApplicationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the WaypointApplicationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModule">terraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference">WaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.variableOptions">variableOptions</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList">WaypointApplicationTemplateVariableOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplateInput">readmeMarkdownTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetailsInput">terraformCloudWorkspaceDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModuleInput">terraformNoCodeModuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.variableOptionsInput">variableOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `terraformCloudWorkspaceDetails`<sup>Required</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetails"></a>

```java
public WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference getTerraformCloudWorkspaceDetails();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference">WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference</a>

---

##### `terraformNoCodeModule`<sup>Required</sup> <a name="terraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModule"></a>

```java
public WaypointApplicationTemplateTerraformNoCodeModuleOutputReference getTerraformNoCodeModule();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference">WaypointApplicationTemplateTerraformNoCodeModuleOutputReference</a>

---

##### `variableOptions`<sup>Required</sup> <a name="variableOptions" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.variableOptions"></a>

```java
public WaypointApplicationTemplateVariableOptionsList getVariableOptions();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList">WaypointApplicationTemplateVariableOptionsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labelsInput"></a>

```java
public java.util.List<java.lang.String> getLabelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `readmeMarkdownTemplateInput`<sup>Optional</sup> <a name="readmeMarkdownTemplateInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplateInput"></a>

```java
public java.lang.String getReadmeMarkdownTemplateInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `terraformCloudWorkspaceDetailsInput`<sup>Optional</sup> <a name="terraformCloudWorkspaceDetailsInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformCloudWorkspaceDetailsInput"></a>

```java
public java.lang.Object getTerraformCloudWorkspaceDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---

##### `terraformNoCodeModuleInput`<sup>Optional</sup> <a name="terraformNoCodeModuleInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.terraformNoCodeModuleInput"></a>

```java
public java.lang.Object getTerraformNoCodeModuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

---

##### `variableOptionsInput`<sup>Optional</sup> <a name="variableOptionsInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.variableOptionsInput"></a>

```java
public java.lang.Object getVariableOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `readmeMarkdownTemplate`<sup>Required</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.readmeMarkdownTemplate"></a>

```java
public java.lang.String getReadmeMarkdownTemplate();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WaypointApplicationTemplateConfig <a name="WaypointApplicationTemplateConfig" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplateConfig;

WaypointApplicationTemplateConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .summary(java.lang.String)
    .terraformCloudWorkspaceDetails(WaypointApplicationTemplateTerraformCloudWorkspaceDetails)
    .terraformNoCodeModule(WaypointApplicationTemplateTerraformNoCodeModule)
//  .description(java.lang.String)
//  .labels(java.util.List<java.lang.String>)
//  .projectId(java.lang.String)
//  .readmeMarkdownTemplate(java.lang.String)
//  .variableOptions(IResolvable)
//  .variableOptions(java.util.List<WaypointApplicationTemplateVariableOptions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.summary">summary</a></code> | <code>java.lang.String</code> | A brief description of the template, up to 110 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformCloudWorkspaceDetails">terraformCloudWorkspaceDetails</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | Terraform Cloud Workspace details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformNoCodeModule">terraformNoCodeModule</a></code> | <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | Terraform Cloud No-Code Module details. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the template, along with when and why it should be used, up to 500 characters. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | List of labels attached to this Application Template. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where the Waypoint Application Template is located. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.readmeMarkdownTemplate">readmeMarkdownTemplate</a></code> | <code>java.lang.String</code> | Instructions for using the template (markdown format supported. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.variableOptions">variableOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>></code> | List of variable options for the template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

A brief description of the template, up to 110 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#summary WaypointApplicationTemplate#summary}

---

##### `terraformCloudWorkspaceDetails`<sup>Required</sup> <a name="terraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformCloudWorkspaceDetails"></a>

```java
public WaypointApplicationTemplateTerraformCloudWorkspaceDetails getTerraformCloudWorkspaceDetails();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

Terraform Cloud Workspace details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#terraform_cloud_workspace_details WaypointApplicationTemplate#terraform_cloud_workspace_details}

---

##### `terraformNoCodeModule`<sup>Required</sup> <a name="terraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.terraformNoCodeModule"></a>

```java
public WaypointApplicationTemplateTerraformNoCodeModule getTerraformNoCodeModule();
```

- *Type:* <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

Terraform Cloud No-Code Module details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#terraform_no_code_module WaypointApplicationTemplate#terraform_no_code_module}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the template, along with when and why it should be used, up to 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#description WaypointApplicationTemplate#description}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

List of labels attached to this Application Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#labels WaypointApplicationTemplate#labels}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where the Waypoint Application Template is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#project_id WaypointApplicationTemplate#project_id}

---

##### `readmeMarkdownTemplate`<sup>Optional</sup> <a name="readmeMarkdownTemplate" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.readmeMarkdownTemplate"></a>

```java
public java.lang.String getReadmeMarkdownTemplate();
```

- *Type:* java.lang.String

Instructions for using the template (markdown format supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#readme_markdown_template WaypointApplicationTemplate#readme_markdown_template}

---

##### `variableOptions`<sup>Optional</sup> <a name="variableOptions" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateConfig.property.variableOptions"></a>

```java
public java.lang.Object getVariableOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>>

List of variable options for the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#variable_options WaypointApplicationTemplate#variable_options}

---

### WaypointApplicationTemplateTerraformCloudWorkspaceDetails <a name="WaypointApplicationTemplateTerraformCloudWorkspaceDetails" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplateTerraformCloudWorkspaceDetails;

WaypointApplicationTemplateTerraformCloudWorkspaceDetails.builder()
    .name(java.lang.String)
    .terraformProjectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Terraform Cloud Workspace. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId">terraformProjectId</a></code> | <code>java.lang.String</code> | Terraform Cloud Project ID. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Terraform Cloud Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails.property.terraformProjectId"></a>

```java
public java.lang.String getTerraformProjectId();
```

- *Type:* java.lang.String

Terraform Cloud Project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#terraform_project_id WaypointApplicationTemplate#terraform_project_id}

---

### WaypointApplicationTemplateTerraformNoCodeModule <a name="WaypointApplicationTemplateTerraformNoCodeModule" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplateTerraformNoCodeModule;

WaypointApplicationTemplateTerraformNoCodeModule.builder()
    .source(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.source">source</a></code> | <code>java.lang.String</code> | No-Code Module Source. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.version">version</a></code> | <code>java.lang.String</code> | No-Code Module Version. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

No-Code Module Source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#source WaypointApplicationTemplate#source}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

No-Code Module Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#version WaypointApplicationTemplate#version}

---

### WaypointApplicationTemplateVariableOptions <a name="WaypointApplicationTemplateVariableOptions" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplateVariableOptions;

WaypointApplicationTemplateVariableOptions.builder()
    .name(java.lang.String)
    .options(java.util.List<java.lang.String>)
    .variableType(java.lang.String)
//  .userEditable(java.lang.Boolean)
//  .userEditable(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.property.name">name</a></code> | <code>java.lang.String</code> | Variable name. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | List of options. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.property.variableType">variableType</a></code> | <code>java.lang.String</code> | Variable type. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.property.userEditable">userEditable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the variable is editable by the user creating an application. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#name WaypointApplicationTemplate#name}

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

List of options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#options WaypointApplicationTemplate#options}

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

Variable type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#variable_type WaypointApplicationTemplate#variable_type}

---

##### `userEditable`<sup>Optional</sup> <a name="userEditable" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions.property.userEditable"></a>

```java
public java.lang.Object getUserEditable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the variable is editable by the user creating an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.88.0/docs/resources/waypoint_application_template#user_editable WaypointApplicationTemplate#user_editable}

---

## Classes <a name="Classes" id="Classes"></a>

### WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference <a name="WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference;

new WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput">terraformProjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId">terraformProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `terraformProjectIdInput`<sup>Optional</sup> <a name="terraformProjectIdInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectIdInput"></a>

```java
public java.lang.String getTerraformProjectIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformProjectId`<sup>Required</sup> <a name="terraformProjectId" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.terraformProjectId"></a>

```java
public java.lang.String getTerraformProjectId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformCloudWorkspaceDetails">WaypointApplicationTemplateTerraformCloudWorkspaceDetails</a>

---


### WaypointApplicationTemplateTerraformNoCodeModuleOutputReference <a name="WaypointApplicationTemplateTerraformNoCodeModuleOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference;

new WaypointApplicationTemplateTerraformNoCodeModuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateTerraformNoCodeModule">WaypointApplicationTemplateTerraformNoCodeModule</a>

---


### WaypointApplicationTemplateVariableOptionsList <a name="WaypointApplicationTemplateVariableOptionsList" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplateVariableOptionsList;

new WaypointApplicationTemplateVariableOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.get"></a>

```java
public WaypointApplicationTemplateVariableOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>>

---


### WaypointApplicationTemplateVariableOptionsOutputReference <a name="WaypointApplicationTemplateVariableOptionsOutputReference" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.waypoint_application_template.WaypointApplicationTemplateVariableOptionsOutputReference;

new WaypointApplicationTemplateVariableOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.resetUserEditable">resetUserEditable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserEditable` <a name="resetUserEditable" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.resetUserEditable"></a>

```java
public void resetUserEditable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.userEditableInput">userEditableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.variableTypeInput">variableTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.userEditable">userEditable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.variableType">variableType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.optionsInput"></a>

```java
public java.util.List<java.lang.String> getOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEditableInput`<sup>Optional</sup> <a name="userEditableInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.userEditableInput"></a>

```java
public java.lang.Object getUserEditableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `variableTypeInput`<sup>Optional</sup> <a name="variableTypeInput" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.variableTypeInput"></a>

```java
public java.lang.String getVariableTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userEditable`<sup>Required</sup> <a name="userEditable" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.userEditable"></a>

```java
public java.lang.Object getUserEditable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.variableType"></a>

```java
public java.lang.String getVariableType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-hcp.waypointApplicationTemplate.WaypointApplicationTemplateVariableOptions">WaypointApplicationTemplateVariableOptions</a>

---



