# `dataHcpVaultRadarResources` Submodule <a name="`dataHcpVaultRadarResources` Submodule" id="@cdktf/provider-hcp.dataHcpVaultRadarResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHcpVaultRadarResources <a name="DataHcpVaultRadarResources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources hcp_vault_radar_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResources;

DataHcpVaultRadarResources.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .uriLikeFilter(DataHcpVaultRadarResourcesUriLikeFilter)
//  .projectId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.uriLikeFilter">uriLikeFilter</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a></code> | Applies a filter to the radar resources based on their URIs. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `uriLikeFilter`<sup>Required</sup> <a name="uriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.uriLikeFilter"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

Applies a filter to the radar resources based on their URIs.

The filter uses the SQL LIKE operator, which allows for wildcard matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#uri_like_filter DataHcpVaultRadarResources#uri_like_filter}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#project_id DataHcpVaultRadarResources#project_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.putUriLikeFilter">putUriLikeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putUriLikeFilter` <a name="putUriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.putUriLikeFilter"></a>

```java
public void putUriLikeFilter(DataHcpVaultRadarResourcesUriLikeFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.putUriLikeFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.resetProjectId"></a>

```java
public void resetProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataHcpVaultRadarResources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResources;

DataHcpVaultRadarResources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResources;

DataHcpVaultRadarResources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResources;

DataHcpVaultRadarResources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResources;

DataHcpVaultRadarResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataHcpVaultRadarResources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataHcpVaultRadarResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataHcpVaultRadarResources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataHcpVaultRadarResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataHcpVaultRadarResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList">DataHcpVaultRadarResourcesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilter">uriLikeFilter</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference">DataHcpVaultRadarResourcesUriLikeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilterInput">uriLikeFilterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.resources"></a>

```java
public DataHcpVaultRadarResourcesResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList">DataHcpVaultRadarResourcesResourcesList</a>

---

##### `uriLikeFilter`<sup>Required</sup> <a name="uriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilter"></a>

```java
public DataHcpVaultRadarResourcesUriLikeFilterOutputReference getUriLikeFilter();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference">DataHcpVaultRadarResourcesUriLikeFilterOutputReference</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `uriLikeFilterInput`<sup>Optional</sup> <a name="uriLikeFilterInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.uriLikeFilterInput"></a>

```java
public IResolvable|DataHcpVaultRadarResourcesUriLikeFilter getUriLikeFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHcpVaultRadarResourcesConfig <a name="DataHcpVaultRadarResourcesConfig" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResourcesConfig;

DataHcpVaultRadarResourcesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .uriLikeFilter(DataHcpVaultRadarResourcesUriLikeFilter)
//  .projectId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.uriLikeFilter">uriLikeFilter</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a></code> | Applies a filter to the radar resources based on their URIs. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the HCP project where Vault Radar is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `uriLikeFilter`<sup>Required</sup> <a name="uriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.uriLikeFilter"></a>

```java
public DataHcpVaultRadarResourcesUriLikeFilter getUriLikeFilter();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

Applies a filter to the radar resources based on their URIs.

The filter uses the SQL LIKE operator, which allows for wildcard matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#uri_like_filter DataHcpVaultRadarResources#uri_like_filter}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#project_id DataHcpVaultRadarResources#project_id}

---

### DataHcpVaultRadarResourcesResources <a name="DataHcpVaultRadarResourcesResources" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResourcesResources;

DataHcpVaultRadarResourcesResources.builder()
    .build();
```


### DataHcpVaultRadarResourcesUriLikeFilter <a name="DataHcpVaultRadarResourcesUriLikeFilter" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResourcesUriLikeFilter;

DataHcpVaultRadarResourcesUriLikeFilter.builder()
    .values(java.util.List<java.lang.String>)
//  .caseInsensitive(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | URI like filters to apply radar resources. Each entry in the list will act like an or condition. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.caseInsensitive">caseInsensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the uri like filter will be case insensitive. Defaults to false. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

URI like filters to apply radar resources. Each entry in the list will act like an or condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#values DataHcpVaultRadarResources#values}

---

##### `caseInsensitive`<sup>Optional</sup> <a name="caseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter.property.caseInsensitive"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the uri like filter will be case insensitive. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.110.0/docs/data-sources/vault_radar_resources#case_insensitive DataHcpVaultRadarResources#case_insensitive}

---

## Classes <a name="Classes" id="Classes"></a>

### DataHcpVaultRadarResourcesResourcesList <a name="DataHcpVaultRadarResourcesResourcesList" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResourcesResourcesList;

new DataHcpVaultRadarResourcesResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.get"></a>

```java
public DataHcpVaultRadarResourcesResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataHcpVaultRadarResourcesResourcesOutputReference <a name="DataHcpVaultRadarResourcesResourcesOutputReference" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResourcesResourcesOutputReference;

new DataHcpVaultRadarResourcesResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.connectionUrl">connectionUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceInfo">dataSourceInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceName">dataSourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.detectorType">detectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceId">hcpResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceName">hcpResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceStatus">hcpResourceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources">DataHcpVaultRadarResourcesResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.connectionUrl"></a>

```java
public java.lang.String getConnectionUrl();
```

- *Type:* java.lang.String

---

##### `dataSourceInfo`<sup>Required</sup> <a name="dataSourceInfo" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceInfo"></a>

```java
public java.lang.String getDataSourceInfo();
```

- *Type:* java.lang.String

---

##### `dataSourceName`<sup>Required</sup> <a name="dataSourceName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceName"></a>

```java
public java.lang.String getDataSourceName();
```

- *Type:* java.lang.String

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.dataSourceType"></a>

```java
public java.lang.String getDataSourceType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `detectorType`<sup>Required</sup> <a name="detectorType" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.detectorType"></a>

```java
public java.lang.String getDetectorType();
```

- *Type:* java.lang.String

---

##### `hcpResourceId`<sup>Required</sup> <a name="hcpResourceId" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceId"></a>

```java
public java.lang.String getHcpResourceId();
```

- *Type:* java.lang.String

---

##### `hcpResourceName`<sup>Required</sup> <a name="hcpResourceName" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceName"></a>

```java
public java.lang.String getHcpResourceName();
```

- *Type:* java.lang.String

---

##### `hcpResourceStatus`<sup>Required</sup> <a name="hcpResourceStatus" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.hcpResourceStatus"></a>

```java
public java.lang.String getHcpResourceStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResourcesOutputReference.property.internalValue"></a>

```java
public DataHcpVaultRadarResourcesResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesResources">DataHcpVaultRadarResourcesResources</a>

---


### DataHcpVaultRadarResourcesUriLikeFilterOutputReference <a name="DataHcpVaultRadarResourcesUriLikeFilterOutputReference" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.hcp.data_hcp_vault_radar_resources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference;

new DataHcpVaultRadarResourcesUriLikeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resetCaseInsensitive">resetCaseInsensitive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaseInsensitive` <a name="resetCaseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.resetCaseInsensitive"></a>

```java
public void resetCaseInsensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitiveInput">caseInsensitiveInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitive">caseInsensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caseInsensitiveInput`<sup>Optional</sup> <a name="caseInsensitiveInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitiveInput"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitiveInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caseInsensitive`<sup>Required</sup> <a name="caseInsensitive" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.caseInsensitive"></a>

```java
public java.lang.Boolean|IResolvable getCaseInsensitive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataHcpVaultRadarResourcesUriLikeFilter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-hcp.dataHcpVaultRadarResources.DataHcpVaultRadarResourcesUriLikeFilter">DataHcpVaultRadarResourcesUriLikeFilter</a>

---



